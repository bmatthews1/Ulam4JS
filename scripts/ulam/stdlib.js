
var ew = new EventWindow();

function EventWindow(){
    this.view = [];

    this.swap = function(s1, s2){
        var temp = view[s1];
        view[s2] = view[s1];
        view[s1] = temp;
    }
}