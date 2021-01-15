export class Topbutton {
    public mybutton = document.getElementById("myBtn");
    // window.onscroll = public() { scrollFunction() };

    public scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.mybutton.style.display = "block";
        } else {
            this.mybutton.style.display = "none";
        }
    }
    public topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}