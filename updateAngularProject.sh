cd ..
rm -Rf temp
mkdir temp
cd temp
ng new odata-v4-ng-app --prefix=ov4 --routing --style=less --skip-install
mv odata-v4-ng-app odata-v4-ng
cd odata-v4-ng
ng g library odata-v4-ng --prefix=ov4 --style=less --skip-install
cd ..
cd ..
rm -Rf temp/odata-v4-ng/.git
rm odata-v4-ng/*.json
rm odata-v4-ng/*.js
rm odata-v4-ng/*.ts
rm odata-v4-ng/src/*.*
rm -Rf odata-v4-ng/src/assets
rm -Rf odata-v4-ng/src/environments
cp -Rfv temp/odata-v4-ng ./
rm -Rf temp