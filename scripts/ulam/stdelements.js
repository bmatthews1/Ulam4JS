
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}

function Empty(){
    this.color = "#222";
    this.symbol = "E";
    this.name = "empty";

    this.behave = function(){};
}

function Wall(){
    this.color = "#fff";
    this.symbol = "W";
    this.name = "Wall";
    this.symmetries = "normal";
    this.diffusability = 0;
    this.radius = 0;
    this.version = 2;

    this.behave = function(){};
}

function Res(){
    this.color = "#60662e";
    this.symbol = "R";
    this.name = "Resource";
    this.symmetries = "all";
    this.radius = 1;
    this.version = 3;

    this.behave = function(){
        if (is("Res", ew.view[1])){
            ew.swap(0, 1);
        }
    }
}

function DReg(){
    this.color = "#033";
    this.symbol = "DR";
    this.name = "Dynamic Regulator";
    this.symmetries = "all";
    this.radius = 1;
    this.version = 3;

    this.behave = function(){
        var other = ew.view[0];
        var empty;
        var res;

        if (is("Empty", other)){

        }
    }
}