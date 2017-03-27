cp herokuStuff/* dist/.
cd dist
npm i
cd ..
grunt buildcontrol:pages
grunt buildcontrol:heroku
