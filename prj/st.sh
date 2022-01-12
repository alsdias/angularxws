#!/bin/sh
#s.dias.andre.luiz@gmail.com # 01/10/22 21:48:14

if [ -z "$1" ] ; then
	nohup ng serve --port 4100 --host 0.0.0.0 > cnohup.out 2>&1 &
elif [ "$1" = '-t' ] ; then
	tail -fn9000 cnohup.out
elif [ "$1" = '-g' ] ; then
	ps aux | grep ng
else
	echo "[ERROR]: unknown option"
fi
