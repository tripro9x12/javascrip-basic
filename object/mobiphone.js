function mobiphone(pin,name) {
    this.name = name;
    if (pin > 0 && pin <= 100) {
      this.pin = pin;
    }
    this.soanThao = [];
    this.thuDen = [];
    this.thuGui = [];
    this.status = true;
    this.turnOn = () => {
      return this.status = true;
    }
    this.turnOff = () => {
      return this.status = false;
    }
    this.sacPin = () => {
      if(this.pin<100){
        this.pin = pin++;
      }
    }
    this.soanTinNhan = (tinNhan)=>{
       if(this.status){
         this.soanThao.push(tinNhan);
         this.pin --;        
       }
    }
    this.guiTinNhan = (mobile,tinNhan)=>{
        if(this.status){
            this.thuGui.push(tinNhan);
            mobile.thuDen.push(tinNhan);
            this.pin--;
        }
    }
    this.nhanTinNhan = (tinNhan)=>{
        if(this.status){
            this.thuDen.push(tinNhan);
            this.pin --;
        }
    }
    this.hopThuDen = ()=>{
        console.log(`${this.name} nhận được tin nhắn: ${this.thuDen}`);
    }
    this.hopThuGui = () => {
        console.log(`${this.name} gửi tin nhắn: ${this.thuGui}`);
    }
  }
  let nokia = new mobiphone(40,'nokia');
  let iPhone = new mobiphone(60,'iPhone');
  nokia.turnOn();
  iPhone.turnOn();
  nokia.soanTinNhan(prompt('soạn tin nhắn'));
  console.log(`tin nhắn soạn thảo: ${nokia.soanThao}`);
  nokia.guiTinNhan(iPhone, prompt('Nhập tin nhắn muốn gửi đến iPhone'));
  nokia.hopThuGui();
  iPhone.hopThuDen();
