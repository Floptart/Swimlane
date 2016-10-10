set source=selenium-server-standalone-2.53.1.jar
set destination=nightwatch\bin
xcopy %source% %destination% /y

set source=windows\nightwatch.json
set destination=nightwatch\bin
xcopy %source% %destination% /y

set source=windows\chromedriver.exe
set destination=nightwatch\bin
xcopy %source% %destination% /y

set source=windows\package.json
set destination=nightwatch
xcopy %source% %destination% /y
