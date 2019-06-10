#!/usr/bin/env bash

APP=odata-v4-ng-app
LIBRARY=odata-v4-ng

# create project template
cd ..
rm -Rf temp
mkdir temp
cd temp
ng new $LIBRARY --create-application=false --routing=false --style=less --skip-install
cd $LIBRARY
ng g application $APP --routing --prefix=ov4 --style=less --skip-install
ng g library $LIBRARY --prefix=ov4 --skip-install


# remove git stuff from project template
rm -Rf .git
rm .gitignore

# move outside from project template
cd ..
cd ..

# copy folders from project to project template
cp -Rf $LIBRARY/.git temp/$LIBRARY
cp $LIBRARY/.gitignore temp/$LIBRARY
cp -Rf $LIBRARY/.idea temp/$LIBRARY/
cp $LIBRARY/updateNode&AngularCli.sh temp/$LIBRARY
cp $LIBRARY/updateAngularProject.sh temp/$LIBRARY
cp -Rf $LIBRARY/projects/$APP/src/app temp/$LIBRARY/projects/$APP/src
cp -Rf $LIBRARY/projects/$LIBRARY/src temp/$LIBRARY/projects/$LIBRARY
cp -Rf $LIBRARY/docs temp/$LIBRARY/

# remove files from project
rm -Rf $LIBRARY

# copy new template over app
cp -Rfv temp/$LIBRARY ./

# delete template project
rm -Rf temp
