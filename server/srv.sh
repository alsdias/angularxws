#!/bin/sh
#s.dias.andre.luiz@gmail.com # 01/10/22

JAVA_CMD="/home/portables/jdk1.8.0_112/bin/java"
SERVER_ARG="angularxws.jar"

if [ -z "$1" ] ; then
	nohup "$JAVA_CMD" -jar "$SERVER_ARG" > snohup.out 2>&1 &
elif [ "$1" = '-t' ] ; then
	tail -fn9000 snohup.out
elif [ "$1" = '-v' ] ; then
	"$JAVA_CMD" -version
else
	echo "[ERROR]: unknown option"
fi
