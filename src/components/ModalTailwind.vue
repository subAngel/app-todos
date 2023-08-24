<template>
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <form method="dialog" class="modal-box">
            <slot name="title"></slot>
            <slot name="body"></slot>
            <div class="modal-action">
                <slot name="actions"></slot>
                <!-- if there is a button in form, it will close the modal -->
            </div>
        </form>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
