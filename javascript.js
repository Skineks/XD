document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModal");
    const paymentForm = document.getElementById("paymentForm");

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Запрет прокрутки фона при открытом модальном окне.
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Восстановление прокрутки фона при закрытии модального окна.
    }

    function closeOnOverlayClick(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    function handleKeydown(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Здесь вы можете отправить данные на сервер для обработки платежа.
        // Например, используя Fetch API или другие методы отправки данных.

        // После успешного завершения платежа закройте модальное окно.
        closeModal();
    }

    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    modal.addEventListener("click", closeOnOverlayClick);
    document.addEventListener("keydown", handleKeydown);
    paymentForm.addEventListener("submit", handleSubmit);
});
