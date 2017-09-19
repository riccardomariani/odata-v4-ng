import { CsdlSchema } from './csdl/csdl-schema';
import { Utils } from '../utils/utils';
import { CsdlEnumType, CsdlEnumMember } from './csdl/csdl-enum-type';
import { CsdlComplexType } from './csdl/csdl-complex-type';
import { CsdlEntityType, CsdlPropertyRef, CsdlKey } from './csdl/csdl-entity-type';
import { CsdlFunction, CsdlParameter, CsdlFunctionImport, CsdlActionImport, CsdlReturnType, CsdlAction } from './csdl/csdl-function';
import { CsdlProperty, CsdlNavigationProperty, CsdlNavigationPropertyBinding } from './csdl/csdl-property';
import { CsdlEntitySet } from './csdl/csdl-entity-set';
import { CsdlSingleton } from './csdl/csdl-singleton';
import { CsdlEntityContainer } from './csdl/csdl-entity-container';

export enum FieldType {
    ATTRIBUTE, TAG
}
export class Field {
    constructor(public name: string, public fieldType: FieldType) { }
}

export class Metadata {
    // TAGS
    private static readonly TAG_SCHEMA = 'Schema';
    private static readonly TAG_ENUM_TYPE = 'EnumType';
    private static readonly TAG_MEMBER = 'Member';
    private static readonly TAG_COMPLEX_TYPE = 'ComplexType';
    private static readonly TAG_ENTITY_TYPE = 'EntityType';
    private static readonly TAG_PROPERTY = 'Property';
    private static readonly TAG_KEY = 'Key';
    private static readonly TAG_PROPERTY_REF = 'PropertyRef';
    private static readonly TAG_NAVIGATION_PROPERTY = 'NavigationProperty';
    private static readonly TAG_FUNCTION = 'Function';
    private static readonly TAG_RETURN_TYPE = 'ReturnType';
    private static readonly TAG_PARAMETER = 'Parameter';
    private static readonly TAG_ACTION = 'Action';
    private static readonly TAG_ENTITY_CONTAINER = 'EntityContainer';
    private static readonly TAG_ENTITY_SET = 'EntitySet';
    private static readonly TAG_SINGLETON = 'Singleton';
    private static readonly TAG_FUNCTION_IMPORT = 'FunctionImport';
    private static readonly TAG_ACTION_IMPORT = 'ActionImport';
    private static readonly TAG_NAVIGATION_PROPERTY_BINDING = 'NavigationPropertyBinding';

    // ATTRIBUTES
    private static readonly ATTRIBUTE_NAMESPACE = 'Namespace';
    private static readonly ATTRIBUTE_NAME = 'Name';
    private static readonly ATTRIBUTE_VALUE = 'Value';
    private static readonly ATTRIBUTE_BASE_TYPE = 'BaseType';
    private static readonly ATTRIBUTE_OPEN_TYPE = 'OpenType';
    private static readonly ATTRIBUTE_TYPE = 'Type';
    private static readonly ATTRIBUTE_NULLABLE = 'Nullable';
    private static readonly ATTRIBUTE_SRID = 'SRID';
    private static readonly ATTRIBUTE_HAS_STREAM = 'HasStream';
    private static readonly ATTRIBUTE_CONTAINS_TARGET = 'ContainsTarget';
    private static readonly ATTRIBUTE_IS_BOUND = 'IsBound';
    private static readonly ATTRIBUTE_ENTITY_SET_PATH = 'EntitySetPath';
    private static readonly ATTRIBUTE_IS_COMPOSABLE = 'IsComposable';
    private static readonly ATTRIBUTE_ENTITY_TYPE = 'EntityType';
    private static readonly ATTRIBUTE_PATH = 'Path';
    private static readonly ATTRIBUTE_TARGET = 'Target';
    private static readonly ATTRIBUTE_FUNCTION = 'Function';
    private static readonly ATTRIBUTE_ACTION = 'Action';
    private static readonly ATTRIBUTE_ENTITY_SET = 'EntitySet';
    private static readonly ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT = 'IncludeInServiceDocument';

    private schemas: CsdlSchema[];

    constructor(xml: string) {
        try {
            const parser: DOMParser = new DOMParser();
            const document: Document = parser.parseFromString(xml, 'text/xml');

            this.checkODataVersion(document);

            this.schemas = this.getObjects(document.documentElement, Metadata.TAG_SCHEMA, [
                new Field(Metadata.ATTRIBUTE_NAMESPACE, FieldType.ATTRIBUTE),
                new Field(Metadata.TAG_ENUM_TYPE, FieldType.TAG),
                new Field(Metadata.TAG_COMPLEX_TYPE, FieldType.TAG),
                new Field(Metadata.TAG_ENTITY_TYPE, FieldType.TAG),
                new Field(Metadata.TAG_FUNCTION, FieldType.TAG),
                new Field(Metadata.TAG_ACTION, FieldType.TAG),
                new Field(Metadata.TAG_ENTITY_CONTAINER, FieldType.TAG)
            ]);
        } catch (error) {
            throw new Error('Unable to parse metadata, ' + error);
        }
    }

    getSchemas(): CsdlSchema[] {
        return this.schemas;
    }

    protected checkODataVersion(document: Document) {
        const attributes: NamedNodeMap = document.documentElement.attributes;
        if (Utils.isNullOrUndefined(attributes)) {
            throw new Error('OData version is not specified in the metadata');
        }

        const attr: Attr = attributes.getNamedItem('Version');
        if (Utils.isNullOrUndefined(attr)) {
            throw new Error('OData version is not specified in the metadata');
        }

        const odataVersion: string = attr.nodeValue;
        if (odataVersion !== '4.0') {
            throw new Error('OData version ' + odataVersion + ' is not supported');
        }
    }

    protected getObjects(parentElement: Element, tag: string, fieldNames: Field[]): any[] {
        let objects: any[];

        const elements: NodeListOf<Element> = parentElement.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            const element: Element = elements.item(index);
            const attributes: NamedNodeMap = element.attributes;
            const fieldValues: any[] = this.getFieldValues(fieldNames, attributes, element);
            if (Utils.isNullOrUndefined(objects)) {
                objects = [];
            }
            switch (tag) {
                case Metadata.TAG_SCHEMA:
                    objects.push(new CsdlSchema(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3],
                        fieldValues[4],
                        fieldValues[5],
                        fieldValues[6]));
                    break;
                case Metadata.TAG_ENUM_TYPE:
                    objects.push(new CsdlEnumType(
                        fieldValues[0],
                        fieldValues[1]));
                    break;
                case Metadata.TAG_COMPLEX_TYPE:
                    objects.push(new CsdlComplexType(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3],
                        fieldValues[4]));
                    break;
                case Metadata.TAG_ENTITY_TYPE:
                    objects.push(new CsdlEntityType(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3],
                        fieldValues[4],
                        fieldValues[5],
                        fieldValues[6]));
                    break;
                case Metadata.TAG_FUNCTION:
                    objects.push(new CsdlFunction(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3],
                        fieldValues[4],
                        fieldValues[5]));
                    break;
                case Metadata.TAG_MEMBER:
                    objects.push(new CsdlEnumMember(
                        fieldValues[0],
                        fieldValues[1]));
                    break;
                case Metadata.TAG_PROPERTY:
                    objects.push(new CsdlProperty(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3]));
                    break;
                case Metadata.TAG_PROPERTY_REF:
                    objects.push(new CsdlPropertyRef(
                        fieldValues[0]));
                    break;
                case Metadata.TAG_NAVIGATION_PROPERTY:
                    objects.push(new CsdlNavigationProperty(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3]));
                    break;
                case Metadata.TAG_PARAMETER:
                    objects.push(new CsdlParameter(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2]));
                    break;
                case Metadata.TAG_ACTION:
                    objects.push(new CsdlAction(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3],
                        fieldValues[4],
                        fieldValues[5]));
                    break;
                case Metadata.TAG_ENTITY_SET:
                    objects.push(new CsdlEntitySet(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2]));
                    break;
                case Metadata.TAG_SINGLETON:
                    objects.push(new CsdlSingleton(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2]));
                    break;
                case Metadata.TAG_FUNCTION_IMPORT:
                    objects.push(new CsdlFunctionImport(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3]));
                    break;
                case Metadata.TAG_ACTION_IMPORT:
                    objects.push(new CsdlActionImport(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3]));
                    break;
                case Metadata.TAG_NAVIGATION_PROPERTY_BINDING:
                    objects.push(new CsdlNavigationPropertyBinding(
                        fieldValues[0],
                        fieldValues[1]));
                    break;
                default: throw new Error('Unknwon tag:' + tag);
            }
        }

        return objects;
    }

    protected getObject(parentElement: Element, tag: string, fieldNames: Field[]): any {
        let object: any;

        const elements: NodeListOf<Element> = parentElement.getElementsByTagName(tag);

        if (Utils.isNotNullNorUndefined(elements) && elements.length > 1) {
            throw new Error('Expected one ' + tag);
        }

        if (Utils.isNotNullNorUndefined(elements) && elements.length === 1) {
            const element: Element = elements.item(0);
            const attributes: NamedNodeMap = element.attributes;
            const fieldValues: any[] = this.getFieldValues(fieldNames, attributes, element);
            switch (tag) {
                case Metadata.TAG_KEY:
                    object = new CsdlKey(fieldValues[0]);
                    break;
                case Metadata.TAG_RETURN_TYPE:
                    object = new CsdlReturnType(
                        fieldValues[0],
                        fieldValues[1]);
                    break;
                case Metadata.TAG_ENTITY_CONTAINER:
                    object = new CsdlEntityContainer(
                        fieldValues[0],
                        fieldValues[1],
                        fieldValues[2],
                        fieldValues[3],
                        fieldValues[4]);
                    break;
                default: throw new Error('Unknwon tag:' + tag);
            }
        }

        return object;
    }

    protected getFieldValues(fields: Field[], attributes: NamedNodeMap, element: Element): any[] {
        const fieldValues: any[] = [];

        for (const field of fields) {
            if (field.fieldType === FieldType.ATTRIBUTE) {
                fieldValues.push(this.getFieldValueByAttribute(field, attributes));
            } else {
                fieldValues.push(this.getFieldValueByTag(field, element));
            }
        }

        return fieldValues;
    }

    protected getFieldValueByAttribute(field: Field, attributes: NamedNodeMap): any {
        switch (field.name) {
            case Metadata.ATTRIBUTE_NAMESPACE:
            case Metadata.ATTRIBUTE_NAME:
            case Metadata.ATTRIBUTE_TYPE:
            case Metadata.ATTRIBUTE_BASE_TYPE:
            case Metadata.ATTRIBUTE_ENTITY_SET_PATH:
            case Metadata.ATTRIBUTE_ENTITY_TYPE:
            case Metadata.ATTRIBUTE_PATH:
            case Metadata.ATTRIBUTE_TARGET:
            case Metadata.ATTRIBUTE_FUNCTION:
            case Metadata.ATTRIBUTE_ACTION:
            case Metadata.ATTRIBUTE_ENTITY_SET:
                return this.getAttributeValue(attributes, field.name);
            case Metadata.ATTRIBUTE_NULLABLE:
            case Metadata.ATTRIBUTE_OPEN_TYPE:
            case Metadata.ATTRIBUTE_HAS_STREAM:
            case Metadata.ATTRIBUTE_IS_BOUND:
            case Metadata.ATTRIBUTE_IS_COMPOSABLE:
            case Metadata.ATTRIBUTE_CONTAINS_TARGET:
            case Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT:
                return this.propertyValueToBoolean(this.getAttributeValue(attributes, field.name));
            case Metadata.ATTRIBUTE_VALUE:
            case Metadata.ATTRIBUTE_SRID:
                return this.propertyValueToNumber(this.getAttributeValue(attributes, field.name));
            default: throw new Error('Unknwon field name:' + field.name);
        }
    }

    protected getFieldValueByTag(field: Field, element: Element): any[] {
        switch (field.name) {
            case Metadata.TAG_ENUM_TYPE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_MEMBER, FieldType.TAG)
                ]);
            case Metadata.TAG_COMPLEX_TYPE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_PROPERTY, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_BASE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_OPEN_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_HAS_STREAM, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ENTITY_TYPE:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_KEY, FieldType.TAG),
                    new Field(Metadata.TAG_PROPERTY, FieldType.TAG),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_BASE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_OPEN_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_HAS_STREAM, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_FUNCTION:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_RETURN_TYPE, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_IS_BOUND, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET_PATH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_IS_COMPOSABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_PARAMETER, FieldType.TAG)
                ]);
            case Metadata.TAG_MEMBER:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_VALUE, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_PROPERTY:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_SRID, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_KEY:
                return this.getObject(element, field.name, [
                    new Field(Metadata.TAG_PROPERTY_REF, FieldType.TAG)
                ]);
            case Metadata.TAG_PROPERTY_REF:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_NAVIGATION_PROPERTY:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_CONTAINS_TARGET, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_PARAMETER:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_RETURN_TYPE:
                return this.getObject(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_NULLABLE, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ACTION:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_RETURN_TYPE, FieldType.TAG),
                    new Field(Metadata.ATTRIBUTE_IS_BOUND, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET_PATH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_IS_COMPOSABLE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_PARAMETER, FieldType.TAG)
                ]);
            case Metadata.TAG_ENTITY_CONTAINER:
                return this.getObject(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_ENTITY_SET, FieldType.TAG),
                    new Field(Metadata.TAG_SINGLETON, FieldType.TAG),
                    new Field(Metadata.TAG_FUNCTION_IMPORT, FieldType.TAG),
                    new Field(Metadata.TAG_ACTION_IMPORT, FieldType.TAG)
                ]);
            case Metadata.TAG_ENTITY_SET:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY_BINDING, FieldType.TAG)
                ]);
            case Metadata.TAG_SINGLETON:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TYPE, FieldType.ATTRIBUTE),
                    new Field(Metadata.TAG_NAVIGATION_PROPERTY_BINDING, FieldType.TAG)
                ]);
            case Metadata.TAG_FUNCTION_IMPORT:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_FUNCTION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_ACTION_IMPORT:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_NAME, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ACTION, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_ENTITY_SET, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_INCLUDE_IN_SERVICE_DOCUMENT, FieldType.ATTRIBUTE)
                ]);
            case Metadata.TAG_NAVIGATION_PROPERTY_BINDING:
                return this.getObjects(element, field.name, [
                    new Field(Metadata.ATTRIBUTE_PATH, FieldType.ATTRIBUTE),
                    new Field(Metadata.ATTRIBUTE_TARGET, FieldType.ATTRIBUTE)
                ]);
            default: throw new Error('Unknwon field name:' + field.name);
        }
    }

    protected getAttributeValue(attributes: NamedNodeMap, attributeName: string): string {
        const attribute: Attr = attributes.getNamedItem(attributeName);
        if (Utils.isNotNullNorUndefined(attribute)) {
            return attribute.nodeValue;
        }
        return undefined;
    }

    protected propertyValueToNumber(attributeValue: string): number {
        return Utils.isNotNullNorUndefined(attributeValue) ? Number(attributeValue) : undefined;
    }

    protected propertyValueToBoolean(attributeValue: string): boolean {
        return Utils.isNotNullNorUndefined(attributeValue) ? attributeValue === 'true' : undefined;
    }
}
