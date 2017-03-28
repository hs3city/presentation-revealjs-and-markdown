# Reveal.js & markdown
## Czyli jak szybko tworzyć ładne prezentacje
**by Olgierd &#34;Allgreed&#34; Kasprowicz**

Note:
Historia o tym jak to dalej jestem "biszkoptem"

- Czy wszyscy mają połączenie z netem w tym momencie?
Paczki NPM ;)

---

# Podstawy markdown

Note:
- Język znaczników
- John Gruber i Aaron Swartz
- Na otwartej licencji BSD
Kto zna? Kto używa?

---

## Idea
**Szybki w zapisie język kompilowalny do HTMLa**

Note:
- HTML jest fajny do tworzenia dokumentów,
- Pisanie czegokolwiek w HTMLu jest bardzo powolne,
- Zamykanie tagów :C

---

## Zastosowania
+ Ładne, przenośne notatki
+ Dokumentacja techniczna
+ Posty na bloga

**I wieeeeele innych...**

Note:
- Hugo / Jekyll wspieraja markdown
- Wyrenderowany html można odpalić w każdej przeglądarce
- Notatki są ładniejsze, niż .txt i mają strukturę

---

## Tooling

+ Standalone:
	+ Kompilator markdown, np. Markdown Preview (plugin do Sublime Text)
+ Online:
	+ np. [dillinger.io](http://dillinger.io/)

---

## Lecimy :D
##### Oparte na [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

--

### Plain text

Zażółć gęślą jaźń

```markdown
	Zażółć gęślą jaźń

```

--

### Abberacje tekstu liniowego

To je *pochyłe*, a to je **tłuste**.

```markdown
	To je *pochyłe*, a to je **tłuste**. 

```

##### Są inne notacje, które dają ten sam efekt

Note:
Np. _ zamiast *

--

### Tytuły

# Jebitny tytuł (h1)
## Średni tytuł (h2)
### Mały tytuł (h3)
#### I tak dalej (h4 -hn)

```markdown
	# Jebitny tytuł (h1)
	## Średni tytuł (h2)
	### Mały tytuł (h3)
	#### I tak dalej (h4 - hn)

```

--

### Listy

- element listy
- element listy
	- subelement listy
	- subelement listy

```markdown
	- element listy
	- element listy
		- subelement listy
		- subelement listy
```

##### Są inne notacje, które dają ten sam efekt

Note:
Np. + albo * zamiast -

--

### Linki

Przykładowy [link](http://lmgtfy.com/)

```markdown
	Przykładowy [link](http://lmgtfy.com/)
```

--

### Obrazki

![](./img/sample.jpg)

```markdown
	![](./img/sample.jpg)

```

--

### Wcięcia

> Trochę wcięcia
>> Więcej wcięcia we wcięciu

```markdown
	> Trochę wcięcia
	>> Więcej wcięcia we wcięciu
```

--

### Kod / tekst preformatowany

```
	if [ "$color_prompt" = yes ]; then
	    PS1='${debian_chroot:+($debian_chroot)}\[...] '
	else
	    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
	fi
	unset color_prompt force_color_prompt
```

	```
		if [ "$color_prompt" = yes ]; then
		    PS1='${debian_chroot:+($debian_chroot)}\[...] '
		else
		    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
		fi
		unset color_prompt force_color_prompt
	```

--

### Kod z kolorowaniem składni (Github flavored)

```js
    // parse range
    const range =
    {
        "beg": parseInt(a.split(" ")[0].slice(2,-1)),
        "end": parseInt(a.split(" ")[2].slice(0,-1))
    };
```

	```js
	    // parse range
	    const range =
	    {
	        "beg": parseInt(a.split(" ")[0].slice(2,-1)),
	        "end": parseInt(a.split(" ")[2].slice(0,-1))
	    };
	```

**To różnie działa poza Githubem**

---

# Reveal.js
## The HTML Presentation Framework

Note:

- 1.0.0 w Grudniu 2011
- Szwed, Hakim El Hattab
- Na wolnej licencji MIT

---

### Wycieczka po frameworku

**[Demo](http://lab.hakim.se/reveal-js/)**

--

### Czemu Reveal.js jest fajny?

+ Free as in free beer
+ Free as in freedom
+ Działa wszędzie
+ Mocarne API
+ Ani 1 binarki :D

---

# Reveal.js + markdown:
# the hard way

---

## Tooling

+ Node.js
+ Bower
+ Serwer plików statycznych, np. live-server
<br/>
<br/>
### Instalacja pakietów npm globalnie:

```bash
	$ npm i(nstall) -g [nazwa pakietu]
```

---

## Ciśniemy :D

--

### Instalacja Reveal.js

```bash
	$ touch bower.json
```

```json
{
  "name": "placeholer",
  "private": true
}
```

```bash
	$ bower install reveal.js
```

--

### Dodanie boilerplate'a i start

```bash
	$ touch index.html
```

```html
<html>
	<head>
		<link rel="stylesheet" href="bower_components/reveal.js/css/reveal.css">
		<link rel="stylesheet" href="bower_components/reveal.js/css/theme/white.css">
	</head>
	<body>
		<div class="reveal">
			<div class="slides">
				<section>Slide 1</section>
				<section>Slide 2</section>
			</div>
		</div>
		<script src="bower_components/reveal.js/js/reveal.js"></script>
		<script>
			Reveal.initialize();
		</script>
	</body>
</html>
```

```
	$ live-server
```

--

### Konfiguracja
<!-- .slide: data-background="black" data-transition="convex" data-backgorund-Transition="concave" -->
#### Theme

Zwykła podmiana pliku .css w 4tej linijce

#### Cała reszta

```js
	Reveal.initialize(
	{ 
		"właściwość": wartość,
	});
```

**[Dokumentacja](https://github.com/hakimel/reveal.js/#configuration)**

--

### Dodanie obsługi markdown
```bash
	$ touch presentation.md
```

```html
<section data-markdown="presentation.md"  
         data-separator="---"  
         data-separator-vertical="--"  
         data-separator-notes="^Note:"  
         data-charset="utf-8">
</section>
```

```json
	dependencies: 
	[
		{ src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	]
```

```
	<script src="bower_components/reveal.js/lib/js/head.min.js"></script>
```

---

# Yo to the rescue!
![](img/yo.png)

Note:

- Addy Osmani
- 1.0.0 w Sierpniu 2013
- Wolna licencja BSD

---

## Tooling

+ Node.js
+ Yeoman ('yo' na npm-ie)
+ generator-prezka

---

## Śmigamy :D

--

```bash
	yo prezka
```
# TA-DAM!

---

# Przydatne triki

--

## Rozmiar ekranu
```js
	Reveal.initialize(
	{
		width: [Oczekiwana szerokość ekranu],
		height: [Oczekiwana wysokość ekranu]
	});
```

Note:

# Wyłącz speaker notes!!!

--

## Dyrektywy w pliku presentation.md
```markdown
	<!-- .slide: data-[właściwość_slide'u]="[wartość]" -->
```
np.
```markdown
	<!-- .slide: data-transition="fade" -->
```
<!-- .slide: data-transition="fade" -->

Note:
# Wyłącz speker notes teraz!!!

--

## Czysty HTML w markdown

<div class="superdiv">
	<input type="range" />
</div>

```html
	<div>
		<input type="range" />
	</div>
```

--

<span id="cool-trigger">
<!-- .slide: data-background-image="img/motherfucker.jpg" -->

---

# The End

<!-- Światło HSowe napierdala ruską dyskotekę -->
