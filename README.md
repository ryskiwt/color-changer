color-changer
====================

Simple tool to insert font tags to change font-color.


Build
--------------------

- Build `color-changer.zip` :

```
$ cd color-changer
$ make
```

- Load zip file to Chrome

`Extensions` > `Load unpacked extension...`


Usage
--------------------

1. Click color-changer browser button, then badge `on` will appear on it.
2. Select target charactors.
2. Press `Alt+R` / `Alt+B`, then html font-tag will be inserted before & after the terget.

Sample:
```
beforetargetafter
-> before<font color="red">target</font>after
```
