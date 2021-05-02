const dragItems = document.querySelectorAll('.dragItem'),
    dropZone = document.querySelectorAll('.dropZone');


dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragstart)
    dragItem.addEventListener('dragend', handlerDragend)
    dragItem.addEventListener('drag', handlerDrag)//всё время пока происходит действие
});
dropZone.forEach(dropZone => {
    dropZone.addEventListener('dragenter', handlerDragenter)
    dropZone.addEventListener('dragleave', handlerDragleave)
    dropZone.addEventListener('dragover', handlerDragover)//показывает когда нажато и находится в зоне, но когда выходишь с него пропадает
    dropZone.addEventListener('drop', handlerDrop)
});

let draggedItem = null;//будет ссылается на тот элемент который перетаскиваем
let droppedItem = null;

function handlerDragstart(event) {
    draggedItem = this//здесь указываю какой элемент перетаскиваю
    // event.dataTransfer.setData('dragItem', this.dataset.item)
    this.classList.add('dragItem--active')
}
function handlerDragend(event) {
    this.classList.remove('dragItem--active')
    draggedItem = null//здесь обнуляем
}
function handlerDrag(event) {
    //console.log('drag')
}
function handlerDragenter(event) {
    event.preventDefault()
    this.classList.add('dropZone--active')
}
function handlerDragleave(event) {
    this.classList.remove('dropZone--active')
}
function handlerDragover(event){
    event.preventDefault()
    //console.log('dragover')
}
function handlerDrop(event){
    // const dragFlag = event.dataTransfer.getData('dragItem')
    // const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
    this.append(draggedItem)
}