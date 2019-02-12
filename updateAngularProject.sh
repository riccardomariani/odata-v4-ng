#!/usr/bin/env bash

APP=odata-v4-ng-app
LIBRARY=odata-v4-ng

# create project template
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

# remove git stuff from project template
rm -Rf temp/$LIBRARY/.git
rm temp/$LIBRARY/.gitignore

# remove config files from app
rm $LIBRARY/*.json
rm $LIBRARY/*.js
rm $LIBRARY/*.ts
rm $LIBRARY/src/*.*
rm -Rf $LIBRARY/src/assets
rm -Rf $LIBRARY/src/environments

# remove config files from library
rm $LIBRARY/projects/$LIBRARY/*.json
rm $LIBRARY/projects/$LIBRARY/*.js
rm $LIBRARY/projects/$LIBRARY/*.ts
rm $LIBRARY/projects/$LIBRARY/src/*.*

# copy new template over app
cp -Rfv temp/$LIBRARY ./
rm -Rf temp
