default: build

build:
	rm -f color-changer.zip
	zip color-changer.zip -r ./* -x .git/* *.DS_Store Makefile README.md
