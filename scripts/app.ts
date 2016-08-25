/**
 * Created by Haziz on 8/21/2016.
 */
// var names = [];
// names.push(prompt("new name"));
// names.push(prompt("new name"));
// names.push(prompt("new name"));
// names.push(prompt("new name"));
// localStorage.setItem("names", JSON.stringify(names));
// let items = localStorage.getItem('names');
// let storedItems = JSON.parse(items);
// console.log(storedItems[0]);
var ads:Ads[] = [];
var id = 0;
interface _Ads{
    model:string;
    company:string;
    price:number;
    color:string;
    image:string;
}
interface _Mobile extends _Ads{
    processor: string;
    screen : number;
    memory : string;
}
interface  _Car extends _Ads{
    engine:string;
    epaClass:string;
    styleName:string;
    driveTrain:number;
    passengerCapacity: number;
    passengerDoors : number;
    bodyStyle: string;
}
abstract class Ads implements _Ads{
    model;
    company;
    price;
    color;
    image;
    constructor(model:string,company:string,price:number,color:string,image){
        this.model = model;
        this.color = color;
        this.company = company;
        this.price = price;
        this.image = image;
    }
    abstract show();
}
class Mobile extends Ads implements _Mobile{
    processor;
    screen;
    memory;
    os;
    constructor(model:string,company:string,price:number,color:string,processor:string,screen:string, memory: string, os:string, image:string){
        super(model,company,price,color,image);
        this.processor = processor;
        this.memory = memory;
        this.screen = screen;
        this.image = image;
        this.os = os;
    }
    show(){
        let tid = "title"+id.toString();
        let modal = `<div id="mobAd${id}" class="modal fade" role="dialog" style="!important;padding: 0"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" data-dismiss="modal"><span class="glyphicon glyphicon-menu-left"></span>Back</h4></div><div class="modal-body"><div class="row"><div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 modalData cols" style="background-color: black"><img src="${this.image}" alt="${this.company} ${this.model}" class="modalImg"></div><div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 modalData"><h2 class="Title">${this.company} ${this.model}</h2><span class="price">Rs. ${this.price}</span><table class="table table-striped"><tr><th>OS:</th><td>${this.os}</td></tr><tr><th>Memory:</th><td>${this.memory}</td></tr><tr><th>Processor: </th><td>${this.processor}</td></tr><tr><th>Display:</th><td>${this.screen}</td></tr><tr><th>Colors</th><td>${this.color}</td></tr><tr><th>Price</th><td>Rs. ${this.price}</td></tr></table></div></div></div></div></div></div>`;
        let ad = `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cols"><div class="item" data-toggle="modal" data-target="#mobAd${id}"><img src="${this.image}" alt="${this.company} ${this.model}"><div><span>Rs. ${this.price}</span><h2 class="boxTitle ${tid}">${this.company} ${this.model}</h2></div></div></div>`;
        document.getElementById("Ads").innerHTML += ad;
        document.getElementById("mads").innerHTML += ad;
        document.getElementById("modals").innerHTML += modal;
        let title = document.getElementsByClassName(tid);
        if(title[0].innerHTML.length > 25){
            // title.setAttribute("style", "margin-top:140px; font-size:x-large; padding-top:5px;");
            // title.className = "over";
            for (let i = 0; i < title.length; i++){
                // title[i].setAttribute("style", "margin-top:140px; font-size:x-large; padding-top:5px;");
                title[i].className += " over";

            }
        }
        id++;

    }
}
class Car extends Ads implements _Car{
    engine;
    epaClass;
    styleName;
    driveTrain;
    passengerCapacity;
    passengerDoors;
    bodyStyle;
    constructor(model:string,company:string,price:number,color:string,engine:string,epaClass:string,
                styleName:string,driveTrain:string,passengerCapacity:number, passengerDoors:number, bodyStyle:string,image:string){
        super(model,company,price,color, image);
        this.epaClass = epaClass;
        this.styleName = styleName;
        this.driveTrain = driveTrain;
        this.engine = engine;
        this.image = image;
        this.passengerCapacity = passengerCapacity;
        this.passengerDoors = passengerDoors;
        this.bodyStyle = bodyStyle;
        this.color = color;
    }
    show(){
        let tid = "title"+id.toString();
        let modal = `<div id="cAds${id}" class="modal fade" role="dialog" style="!important;padding: 0"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" data-dismiss="modal"><span class="glyphicon glyphicon-menu-left"></span>Back</h4></div><div class="modal-body"><div class="row"><div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 modalData cols" style="background-color: black"><img src="${this.image}" alt="Note7" class="modalImg"></div><div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 modalData"><h2 class="Title">${this.company} ${this.model}</h2><span class="price">Rs. ${this.price}</span><table class="table table-striped"><tr><th>Engine: </th><td>${this.engine}</td></tr><tr><th>EPA Class: </th><td>${this.epaClass}</td></tr><tr><th>Style Name: </th><td>${this.styleName}</td></tr><tr><th>Drivetrain:</th><td>${this.driveTrain}</td></tr><tr><th>Passenger Capacity: </th><td>${this.passengerCapacity}</td></tr><tr><th>Passenger Doors: </th><td>${this.passengerDoors}</td></tr><tr><th>Body Style:</th><td>${this.bodyStyle}</td></tr><tr><th>Colors: </th><td>${this.color}</td></tr><tr><th>Price</th><td>Rs. ${this.price}</td></tr></table></div></div></div></div></div></div>`;
        let ad = `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cols"><div class="item" data-toggle="modal" data-target="#cAds${id}"><img src="${this.image}" alt="${this.company} ${this.model}"><div><span>Rs. ${this.price}</span><h2 class="boxTitle ${tid}">${this.company} ${this.model}</h2></div></div></div>`;

        document.getElementById("Ads").innerHTML += ad;
        document.getElementById("cads").innerHTML += ad;
        document.getElementById("modals").innerHTML += modal;
        let title = document.getElementsByClassName(tid);

        if(title[0].innerHTML.length > 25){
            // title.setAttribute("style", "margin-top:140px; font-size:x-large; padding-top:5px;");
            // title.className = "over";
            for (let i = 0; i < title.length; i++){
                // title[i].setAttribute("style", "margin-top:140px; font-size:x-large; padding-top:5px;");
                title[i].className += " over";

            }
        }
        id++;
    }
}
ads.unshift(new Mobile("Galaxy Note 7", "Samsung", 93999,"Blue Coral, Gold Platinum, Silver Titanium, Black Onyx ", "	2.3 GHZ Quad-Core, 1.6 GHz Quad-Core, Exynos 8890 GPU: Mali-T880 MP12  ","	5.7 inches, 1440 x 2560 pixels (~515 ppi pixel density) Sensors: Accelerometer, Iris scanner, fingerprint, gyro, proximity, compass, barometer, heart rate, SpO2 Display Colour:	Super AMOLED capacitive touchscreen, 16M colors, Multitouch, Corning Gorilla Glass 5  ", "64GB built-in, 4GB RAM, MicroSD Card (support up to 256GB) (dedicated slot) single-SIM model ", "Android OS, v6.0.1 (Marshmallow), upgradable to v7.0 (Nougat)", "images/note7.jpg"));
ads.unshift(new Car("Corolla 2017 CVT Automatic SE Special Edition", "Toyota", 2562525,"Red, Blue, Grey",
    "Regular Unleaded I-4, 1.8 L","Compact Cars", "SE Special Edition CVT Automatic (GS)", "Front Wheel Drive",
5,4,"4dr Car", "images/corolla2017.jpg"));
ads.unshift(new Mobile("Galaxy J7 2016", "Samsung", 32999,"	White, Black, Gold, Rose Gold ","1.6 GHz Octa-Core, Exynos 7870 Octa, GPU: Mali-T830MP2 ","5.5 inches, 720 x 1280 pixels (~267 ppi pixel density) Sensors: Accelerometer, proximity, compass Super AMOLED capacitive touchscreen, 16M colors, Multitouch","16GB built-in, 2GB RAM, microSD card (support up to 256GB) (dedicated slot)", "Android OS, v6.0.1 (Marshmallow)", "images/j7.jpg"));
ads.unshift(new Car("86 2017", "Toyota", 2750867,"Red, Blue, Silver, White","Premium Unleaded H-4, 2.0 L","Minicompact Cars", "Manual (Natl)", "Rear Wheel Drive",4,2,"2dr Car", "images/toyota86.jpg"));
// ads.unshift(new Mobile("Model", "company", 9399,"Color","processor","display","Memory", "OS", "Image"));
// ads.unshift(new Car("Model", "Company", 2562525,"Color","engine","epa class", "style name", "drive train",5,4,"body style", "image"));


for(let i = 0; i< ads.length; i++){
    ads[i].show();
}
/**
 * ads.unshift(new Mobile("Model", "company", 9399,"Color","processor","display","Memory", "OS", "Image"));
 * ads.unshift(new Car("Model", "Company", 2562525,"Color","engine","epa class", "style name", "drive train",5,4,"body style", "image"));
 * //push ads detail in localstorage then push data on ads[];
 * **/