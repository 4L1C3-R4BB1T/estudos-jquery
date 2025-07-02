Uma página só pode ser manipulada de forma segura quando o documento estiver pronto. 

```js
$(document).ready(function () {
    // código
});
```

---

#### Selecionando elementos

```js
$("#list").hide();          // id
$(".btn").hide();           // classe
$("ul li a").hide();        // elemento html
$(".btn, div").hide();      // múltiplos elementos
$("a[href^='#']").hide(); 
```

```js
var $paragrafo = $(".paragrafo");
```

```js
if ($("#id").length) {
    console.log("existe");
}
```

**Inserção: inside**

```js
$("p").append("<span>Adiciona ao final</span>");
$("p").append($("ul"));
$("<p>Adicionar P</p>").appendTo($("ul"));

var $conteudoH2 = $("h2").html();
$("h2").html("Inserir texto");

$("p").prepend("<span>Adiciona no início</span>");
$("<p>Adicionar P</p>").prependTo($("ul"));
```

**Inserção: outside**

```js
$("p").after("<span> . </span>");
$("<span> . </span>").insertAfter("p");

$("p").before("<span> . </span>");
$("<span> . </span>").insertBefore("p");

// envolve o item selecionado com o elemento passado
$("p").wrap("<div class='azul'></div>");
// remove o elemento pai do item selecionado  
$("ul li a").unwrap(); 
```

---

#### Eventos básicos

```js
$("a").click(function () {
    $("a").text("clicou");
});

$("a").on("click", function (event) {
    event.preventDefault();
    $(this).text("clicou"); // refere-se ao objeto do evento
});

$("a").mouseenter(function () {
    $(this).text("mouse enter");
});

$("a").mouseleave(function () {
    $(this).text("mouse leave");
});

$(document).scroll(function () {
    $(this).text("scroll");
});

$(window).resize(function () {
    $("a").text($("body").width());
});
```

---

#### Classes

```js
$("a").click(function () {
    $(this).addClass("active");
});

$("a").click(function () {
    $(this).removeClass("active");
});

$("a").click(function () {
    $(this).toggleClass("active");
});

$("a").click(function () {
    let condition = $(this).hasClass("active");
    if (condition) {
        console.log("Possui a classe");
    }
});
```

---

🔗 Links
* [Documentação](https://api.jquery.com)  
