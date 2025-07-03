$(document).ready(() => {

    const $name = $("#name");
    const $email = $("#email");
    const $message = $("#message");

    $message.on("input", () => {
        const length = $message.val().length;
        const $count = $("#count");
        $count.text(`${length}/250`);
        (length > 250) ? $count.addClass("invalid") : $count.removeClass("invalid");
    });

    const validateFields = () => {
        const fields = [
            { value: $name.val(), label: "nome" },
            { value: $email.val(), label: "email" },
            { value: $message.val(), label: "mensagem" },
        ];

        for (const f of fields) {
            if (!f.value.trim()) {
                alert(`Preencha o campo ${f.label}!`);
                return false;
            }
        }

        if ($message.val().length > 250) {
            alert("O campo mensagem deve ter no máximo 250 caracteres!");
            return false;
        }

        return true;
    };

    $("#contact-form").submit((e) => {
        e.preventDefault();

        if (validateFields()) {
            alert("Formulário enviado com sucesso!");
            $("#contact-form")[0].reset();
            $("#count").text("0/250");
        }
    });

});
