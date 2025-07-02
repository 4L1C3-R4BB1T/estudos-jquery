Uma página só pode ser manipulada de forma segura quando o documento estiver pronto. 

```js
$(document).ready(() => {
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
$("a").click(() => {
    $("a").text("clicou");
});

$("a").on("click", (event) => {
    event.preventDefault();
    $(this).text("clicou"); // refere-se ao objeto do evento
});

$("a").mouseenter(() => {
    $(this).text("mouse enter");
});

$("a").mouseleave(() => {
    $(this).text("mouse leave");
});

$(document).scroll(() => {
    $(this).text("scroll");
});

$(window).resize(() => {
    $("a").text($("body").width());
});
```

---

#### Classes

```js
$("a").click(() => {
    $(this).addClass("active");
});

$("a").click(() => {
    $(this).removeClass("active");
});

$("a").click(() => {
    $(this).toggleClass("active");
});

$("a").click(() => {
    let condition = $(this).hasClass("active");
    if (condition) {
        console.log("Possui a classe");
    }
});
```

---

#### Métodos gerais

```js
// pega o valor de href
var href = $("a").attr("href"); 

// insere o valor em alt
$("img").attr("alt", "alt imagem"); 

$("a").removeAttr("href");

// pega o valor em  input, select e textarea
var name = $("input.name").val(); 
// insere o valor
$("input.name").val("teste"); 

// remove o elemento
$("a").remove(); 

// remove todos os filhos do elemento
$(".modal").empty(); 
```

---

#### Estilo 

```js
// retorna o valor
var psize = $(".btn").css("font-size");

// insere o valor 
$(".btn").css("font-size", "20px");

$("a").css({
    "max-width": "200px",
    "background": "blue"
});

$(document).scroll(() => {
    var documentTop = $(this).scrollTop();
    $(".modal").css("height", documentTop * 10);
});

var offset = $(".modal").offset().left();
$(".modal").offset({top: 200, left: 0});
```

---

🔗 Links
* [Documentação](https://api.jquery.com)  
