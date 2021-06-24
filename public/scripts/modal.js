export default function Modal(){
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //atribuir classe active
        modalWrapper.classList.add("active")
    }
    function close(){
        //remover classe active
        modalWrapper.classList.remove("active")
    }
    return{
        open,
        close
    }
}