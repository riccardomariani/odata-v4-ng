cd ..
rm -rf temp
mkdir temp
cd temp
ng new odata-v4-ng --routing --prefix=ov4 --style=less --skip-install
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