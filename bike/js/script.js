function ModalWarning(){
    Swal.fire({
        title: "item adicionado ao carrinho",
        text: "item adicionado ao carrinho",
        icon: "success"
      });
}

function ModalCompra(){
  Swal.fire({
  title: "Dseja finalizar a compra?",
  text: "tem certeza?!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "sim!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "compra finalizada!",
      text: "sua compra foi finalizada.",
      icon: "success"
    });
  }
});
}
