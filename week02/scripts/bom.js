const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myBook = input.value;
    input.value = '';

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const listText = document.createElement('text');

    li.appendChild(listText);
    listText.textContent = myBook;
    li.append(deleteButton);
    deleteButton.textContent = 'X';
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })

    input.focus();
})