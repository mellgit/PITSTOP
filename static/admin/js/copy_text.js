function copy_text(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

function creatorHandler(id, f) {
  return () => { f(id) }
}

document.getElementById("save_address").addEventListener("click", creatorHandler("output-laer", copy_text))
document.getElementById("save_note").addEventListener("click", creatorHandler("output-laer1", copy_text))
document.getElementById("save_email_contacts").addEventListener("click", creatorHandler("output-laer2", copy_text))
document.getElementById("save_email").addEventListener("click", creatorHandler("output-laer3", copy_text))
document.getElementById("save_phone").addEventListener("click", creatorHandler("output-laer4", copy_text))

document.getElementById("input-reception").addEventListener("click", creatorHandler("input-laer1", copy_text))
document.getElementById("input-file").addEventListener("click", creatorHandler("input-laer2", copy_text))
document.getElementById("input-brand").addEventListener("click", creatorHandler("input-laer3", copy_text))
document.getElementById("input-price").addEventListener("click", creatorHandler("input-laer4", copy_text))
document.getElementById("input-articul").addEventListener("click", creatorHandler("input-laer5", copy_text))
document.getElementById("input-nan").addEventListener("click", creatorHandler("input-laer6", copy_text))
document.getElementById("input-description").addEventListener("click", creatorHandler("input-laer7", copy_text))

function clean_liner(id){
 document.getElementById(id).value="";
}

document.getElementById("input-del1").addEventListener("click", creatorHandler("input-laer1", clean_liner))
document.getElementById("input-del2").addEventListener("click", creatorHandler("input-laer2", clean_liner))
document.getElementById("input-del3").addEventListener("click", creatorHandler("input-laer3", clean_liner))
document.getElementById("input-del4").addEventListener("click", creatorHandler("input-laer4", clean_liner))
document.getElementById("input-del5").addEventListener("click", creatorHandler("input-laer5", clean_liner))
document.getElementById("input-del6").addEventListener("click", creatorHandler("input-laer6", clean_liner))
document.getElementById("input-del7").addEventListener("click", creatorHandler("input-laer7", clean_liner))
