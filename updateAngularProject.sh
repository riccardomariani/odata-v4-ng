APP=odata-v4-ng-app
LIBRARY=odata-v4-ng
cd ..
rm -Rf temp
mkdir temp
cd temp
ng new $APP --prefix=ov4 --routing --style=less --skip-install
mv $APP $LIBRARY
cd $LIBRARY
ng g library $LIBRARY --prefix=ov4 --style=less --skip-install
cd ..
cd ..
rm -Rf temp/$LIBRARY/.git
rm temp/$LIBRARY/.gitignore
rm $LIBRARY/*.json
rm $LIBRARY/*.js
rm $LIBRARY/*.ts
rm $LIBRARY/src/*.*
rm -Rf $LIBRARY/src/assets
rm -Rf $LIBRARY/src/environments
cp -Rfv temp/$LIBRARY ./
rm -Rf temp