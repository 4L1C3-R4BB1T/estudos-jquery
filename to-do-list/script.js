$(document).ready(function () {
    function saveTasks() {
        const tasks = [];
        $('#task-list li').each(function () {
            tasks.push({
                text: $(this).find('.task-text').text(),
                completed: $(this).find('.check-task').prop('checked')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTask(task.text, task.completed);
        });
    }

    function addTask(text, completed = false) {
        if (!text) return;

        const li = $(`
            <li>
                <input type="checkbox" class="check-task">
                <span class="task-text"></span>
                <button class="remove-btn">❌</button>
            </li>
        `);

        li.find('.task-text').text(text);
        li.find('.check-task').prop('checked', completed);
        if (completed) li.addClass('completed');

        // Eventos
        li.find('.check-task').change(function () {
            li.toggleClass('completed');
            saveTasks();
        });

        li.find('.remove-btn').click(function (e) {
            e.stopPropagation();
            li.remove();
            saveTasks();
        });

        $('#task-list').append(li);
        saveTasks();
    }

    $('#add-task').click(function () {
        const taskText = $('#new-task').val().trim();
        addTask(taskText);
        $('#new-task').val('');
    });

    $('#new-task').keypress(function (e) {
        if (e.which === 13) {
            $('#add-task').click();
        }
    });

    loadTasks();
});
