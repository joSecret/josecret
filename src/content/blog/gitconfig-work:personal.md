---
title: 'Config .gitconfig work/personal'
description: 'Config Git config for Work and personal'
pubDate: 'Aug 25 2024'
heroImage: '/gitconfig.png'
---

In your folder ex:```sites/work``` add ```.gitconfig``` file name can be this or like example ```.gitconfig-work```.

with content ex:

```
[user]
	name = Your Name
	email = YOUR@EMAIL.com
```

Open gitconfig file:

```ssh
code ~/.gitconfig
```

after rows like:

```
[user]
	name = Your Name
	email = YOUR@EMAIL.com
```

add
```
[includeIf "gitdir:~/FOLDER/PATH/**"]
    path = ~/FOLDER/PATH/.gitconfig
```

this FOLDER/PATH is for macOS
