function setup()
{
  createCanvas(800, 600);
  
  // Create the button once
  button = createButton('Start');
  button.position(475, 350);
  button.mousePressed(beginGame);
  
  // Create the button but hide it initially
  soundButton = createButton("Play Sound");
  soundButton.position(350, 450);
  soundButton.mousePressed(playRoomSound);
  soundButton.hide();
  
  elevatorMusic.loop(); // Start background music and set it to loop
  elevatorMusic.setVolume(0.5);
  
  // Set up listener for when roomSound ends
  roomSound.onended(() => {
    elevatorMusic.setVolume(0.5); // Reset to original volume
  });
}
let soundButton;
let room = "start";
let infoText = "Information about the room";
let showInfo = false;
let roomSound;
let videoEnded = false;

//Preload Assets
function preload()
{
  //Images
  MakerSpaceNoHighlight = loadImage('Images/Maker Space.jpg');
  MakerSpaceHighlight1 = loadImage('Images/Maker Space Table.jpg');
  MakerSpaceHighlight2 = loadImage('Images/Maker Space Meeting.jpg');
  MakerSpaceHighlight3 = loadImage('Images/Maker Space Printer.jpg');
  MakerSpacetoClear = loadImage('Images/Maker Space To Clear.jpg');
  MakerSpaceDoorOpen = loadImage('Images/Maker Space Door Open.png');
  MakerSpaceClear = loadImage('Images/Maker Space Clear.jpg');
  MakerSpaceClear1 = loadImage('Images/Maker Space Clear Testing.jpg');
  MakerSpaceClear2 = loadImage('Images/Maker Space Clear Audio.jpg');
  MakerSpaceClear3 = loadImage('Images/Maker Space Clear Mocap.jpg');
  MakerSpaceClear4 = loadImage('Images/Maker Space Clear Printer.jpg');
  MakerSpaceClear5 = loadImage('Images/Maker Space Clear Other View.jpg');
  MakerSpaceClearOtherView = loadImage('Images/Maker Space Clear Other View 2.jpg');
  MakerSpaceClearOtherView2 = loadImage('Images/Maker Space Clear Other View 2 Paint.jpg');
  MainTable = loadImage('Images/Main Table.jpg');
  MainTable1 = loadImage('Images/Main Table Ultimaker.jpg');
  MainTable2 = loadImage('Images/Main Table Resin.jpg');
  MainTable3 = loadImage('Images/Main Table Ultimaker SOP.jpg');
  MainTable4 = loadImage('Images/Main Table Resin SOP.jpg');
  MainTable5 = loadImage('Images/Main Table Switch.jpg');
  MainTableOtherSide = loadImage('Images/Main Table Other Side.jpg');
  MainTableOtherSide1 = loadImage('Images/Main Table Other Side Computers.jpg');
  MainTableOtherSide2 = loadImage('Images/Main Table Other Side Laser Printer 1.jpg');
  MainTableOtherSide3 = loadImage('Images/Main Table Other Side Laser Printer 2.jpg');
  MainTableOtherSide4 = loadImage('Images/Main Table Other Side SOP 1.jpg');
  MainTableOtherSide5 = loadImage('Images/Main Table Other Side SOP 2.jpg');
  MainTableOtherSide6 = loadImage('Images/Main Table Other Side Switch.jpg');
  Ultimaker = loadImage('Images/Ultimaker.jpg');
  Resin = loadImage('Images/Resin.jpg');
  Printer = loadImage('Images/Printer.jpg');
  Computer = loadImage('Images/Main Table Computer.jpg');
  LaserPrinter1 = loadImage('Images/Laser Printer 1.jpg');
  LaserPrinter2 = loadImage('Images/Laser Printer 2.jpg');
  GameTesting = loadImage('Images/GameTesting.jpg');
  AudioBooth = loadImage('Images/AudioBooth.jpg');
  MocapRoom = loadImage('Images/MocapRoom.jpg');
  UCFLogo = loadImage('Images/UCF Logo.png');
  
  //Sound
  elevatorMusic = loadSound('Sounds/ElevatorMusic.mp3');
  roomSound = loadSound('Sounds/UltimakerVoice.mp3');
  ultimakerSound = loadSound('Sounds/UltimakerVoice.mp3');
  resinSound = loadSound('Sounds/ResinVoice.mp3');
  computerSound = loadSound('Sounds/ComputerVoice.mp3');
  laserSound1 = loadSound('Sounds/LaserVoice1.mp3');
  laserSound2 = loadSound('Sounds/LaserVoice2.mp3');
  printerSound = loadSound('Sounds/PrinterVoice.mp3');
  gameTestingSound = loadSound('Sounds/GameTestingVoice.mp3');
  
  // Video setup
  GameTestingEntrance = createVideo("Videos/GameTestingEntrance.mp4");
  GameTestingEntrance.hide(); // Hides the default video controls
  
  AudioEntrance = createVideo("Videos/AudioEntrance.mp4");
  AudioEntrance.hide();
  
  MocapEntrance = createVideo("Videos/MocapEntrance.mp4");
  MocapEntrance.hide();
}

function draw()
{
  
  if (room == "start")
  {
    background(220);
    image(UCFLogo,25,100)
    textSize(24)
    textAlign(CENTER, CENTER);
    text('Welcome to the UCF\n\nMaker Space Tour!', 500, 200);
    textSize(18)
    text('To Continue, click Start', 500, 325);
    // Create a button and place it beneath the canvas.
    button.show();
  }
  else if (room == "MakerSpace1")
    {
      showInfo = false;
      //image(MakerSpaceNoHighlight,0,0);
      
      //Set hover region 1 3D Tables
      let hoverX = 200;
      let hoverY = 300;
      let hoverWidth = 200;
      let hoverHeight = 200;
      
      //Set hover region 2 Meeting
      let hoverX2 = 400;
      let hoverY2 = 250;
      let hoverWidth2 = 200;
      let hoverHeight2 = 200;
      
      //Set hover region 3 Printer
      let hoverX3 = 600;
      let hoverY3 = 250;
      let hoverWidth3 = 200;
      let hoverHeight3 = 200;
      
      //Set hover region 4 to Clear
      let hoverX4 = 0;
      let hoverY4 = 100;
      let hoverWidth4 = 100;
      let hoverHeight4 = 200;
      
      //Set hover region 5 to Clear
      let hoverX5 = 700;
      let hoverY5 = 230;
      let hoverWidth5 = 65;
      let hoverHeight5 = 10;
      
      // Check if the mouse is within the hover area
      if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
      {
        // Display the highlighted image when the mouse is over the area
        image(MakerSpaceHighlight1, 0, 0);
      }
      /*else if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
      {
        // Display the highlighted image when the mouse is over the area
        image(MakerSpaceHighlight2, 0, 0);
      }*/
      else if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
      {
        // Display the highlighted image when the mouse is over the area
        image(MakerSpaceHighlight3, 0, 0);
      }
      else if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
      {
        // Display the highlighted image when the mouse is over the area
        image(MakerSpacetoClear, 0, 0);
      }
      else if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
      {
        // Display the highlighted image when the mouse is over the area
        
        image(MakerSpaceDoorOpen, 0, 0);
      }
      else
      {
      // Display the normal image when the mouse is not hovering
      image(MakerSpaceNoHighlight, 0, 0);
      }
    }
  else if (room == "MakerSpaceClear")
  {
    showInfo = false;
    image(MakerSpaceClear, 0, 0)
    
    //Set hover region for Game Testing
    let hoverX = 750;
    let hoverY = 150;
    let hoverWidth = 50;
    let hoverHeight = 150;
    
    //Set hover region for Audio Booth
    let hoverX2 = 480;
    let hoverY2 = 150;
    let hoverWidth2 = 40;
    let hoverHeight2 = 100;
    
    //Set hover region for Mocap Booth
    let hoverX3 = 430;
    let hoverY3 = 160;
    let hoverWidth3 = 30;
    let hoverHeight3 = 100;
    
    //Set hover region for Printer
    let hoverX4 = 560;
    let hoverY4 = 200;
    let hoverWidth4 = 100;
    let hoverHeight4 = 100;
    
    //Set hover region for Other Angle
    let hoverX5 = 350;
    let hoverY5 = 180;
    let hoverWidth5 = 50;
    let hoverHeight5 = 100;
    
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      image(MakerSpaceClear1, 0, 0)
    }
    else if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      image(MakerSpaceClear2, 0, 0)
    }
    else if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      image(MakerSpaceClear3, 0, 0)
    }
    else if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      image(MakerSpaceClear4, 0, 0)
    }
    else if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
    {
      image(MakerSpaceClear5, 0, 0)
    }
  }
  else if (room == "Maker Space Clear 2")
  {
    showInfo = false;
    image(MakerSpaceClearOtherView, 0, 0);
    
    //Set hover region for Game Testing
    let hoverX = 450;
    let hoverY = 230;
    let hoverWidth = 300;
    let hoverHeight = 150;
    
    // Check if the mouse is within the hover area
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      // Display the highlighted image when the mouse is over the area
      image(MakerSpaceClearOtherView2, 0, 0);
    }
  }
  else if (room == "MainTable")
  {
    showInfo = false;
    image(MainTable, 0, 0);
    
    //Set hover region 1 Ultimakers
    let hoverX = 200;
    let hoverY = 200;
    let hoverWidth = 600;
    let hoverHeight = 100;
    
    //Set hover region 2 Resin
    let hoverX2 = 0;
    let hoverY2 = 200;
    let hoverWidth2 = 200;
    let hoverHeight2 = 100;
    
    //Set hover region 3 Ultimaker SOP
    let hoverX3 = 480;
    let hoverY3 = 150;
    let hoverWidth3 = 50;
    let hoverHeight3 = 50;
    
    //Set hover region 4 Resin SOP
    let hoverX4 = 350;
    let hoverY4 = 150;
    let hoverWidth4 = 50;
    let hoverHeight4 = 50;
    
    //Set hover region 5 Switch
    let hoverX5 = 0;
    let hoverY5 = 0;
    let hoverWidth5 = 800;
    let hoverHeight5 = 200;
    
    // Check if the mouse is within the hover area
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTable1, 0, 0);
    }
    
    if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTable2, 0, 0);
    }
    
    if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTable3, 0, 0);
    }
    
    if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTable4, 0, 0);
    }
    
    if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTable5, 0, 0);
    }
  }
  else if (room == "MainTable2")
  {
    showInfo = false;
    image(MainTableOtherSide, 0, 0);
    
    //Set hover region 1 Computers
    let hoverX = 50;
    let hoverY = 250;
    let hoverWidth = 100;
    let hoverHeight = 100;
    
    //Set hover region 2 Computers
    let hoverX2 = 750;
    let hoverY2 = 250;
    let hoverWidth2 = 50;
    let hoverHeight2 = 100;
    
    //Set hover region 3 Laser Printer 1
    let hoverX3 = 150;
    let hoverY3 = 250;
    let hoverWidth3 = 200;
    let hoverHeight3 = 100;
    
    //Set hover region 4 Laser Printer 2
    let hoverX4 = 430;
    let hoverY4 = 280;
    let hoverWidth4 = 150;
    let hoverHeight4 = 50;
    
    //Set hover region 5 SOP 1
    let hoverX5 = 190;
    let hoverY5 = 350;
    let hoverWidth5 = 50;
    let hoverHeight5 = 50;
    
    //Set hover region 6 SOP 2
    let hoverX6 = 250;
    let hoverY6 = 370;
    let hoverWidth6 = 50;
    let hoverHeight6 = 50;
    
    //Set hover region 6 Switch
    let hoverX7 = 0;
    let hoverY7 = 0;
    let hoverWidth7 = 800;
    let hoverHeight7 = 250;
    
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide1, 0, 0);
    }
    
    if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide1, 0, 0);
    }
    
    if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide2, 0, 0);
    }
    
    if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide3, 0, 0);
    }
    
    if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide4, 0, 0);
    }
    
    if (mouseX > hoverX6 && mouseX < hoverX6 + hoverWidth6 && mouseY > hoverY6 && mouseY < hoverY6 + hoverHeight6)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide5, 0, 0);
    }
    
    if (mouseX > hoverX7 && mouseX < hoverX7 + hoverWidth7 && mouseY > hoverY7 && mouseY < hoverY7 + hoverHeight7)
    {
      // Display the highlighted image when the mouse is over the area
      image(MainTableOtherSide6, 0, 0);
    }
  }
  else if (room == "Ultimaker")
  {
    roomSound = ultimakerSound;
    image(Ultimaker, 0, 0);
    showInfo = true;
    infoText = "This is an Ultimaker, a 3D printer that uses a variety of materials to print 3D objects.  \nSome such materials used are \nPLA, PETG, polywood, etc.  \n\nOperating the ultimaker is as simple as using a 3D printing software \nsuch as CURA to convert 3D models \ninto something printable, then once put onto the printer, letting it handle the magic."
    
  }
  else if (room == "Resin")
  {
    roomSound = resinSound;
    showInfo = true;
    image(Resin, 0, 0);
    infoText = "This is a Form 3 Resin Printer, a 3D printer that uses \nresin, a viscous, organic substance that can be natural or synthetic, \nto print 3D models.  \n\nOperating the form 3 resin printer is a process that requires much precision and care, \nsuch as in properly preparing files to avoid vacuum pockets, \nusing the form wash to ensure the device is ready for use, \nchecking for potentially catastrophic leakage, \nand knowing how to properly dispose of material."
  }
  else if (room == "Printer")
  {
    roomSound = printerSound;
    image(Printer, 0, 0);
    showInfo = true;
    infoText = "Have a game in need of advertising and promotional material?  \nThen this printer is for you!  \nCreated to print high resolution images on high quality paper,\n there is no better tool for bringing out the best \nof your game with a professional poster as can be printed here."
  }
  else if (room == "Main Table Computers")
  {
    roomSound = computerSound;
    image(Computer, 0, 0);
    showInfo = true;
    infoText = "Directly connected to the 3D printers, software such as CURA \ncan be used here to help convert a standard model created in Maya or Blender \ninto a model ready to be printed.  \n\nBy disecting models and cutting them in such a way, they can be made readable \nto 3D printers in such a way that allows users \nto control detail, speed, density, etc."
  }
  else if (room == "Laser Printer 1")
  {
    roomSound = laserSound1;
    image(LaserPrinter1, 0, 0);
    showInfo = true;
    infoText = "This is a Fusion Edge laser cutter, used to cut designs onto \nsuch materials as wood or plastic.  \n\nUsing software such as illustrator, designs can be made using color-coding \nto help designate the type of work you want your laser printer to do, \nbe it cutting, etching, or scorching, allowing a lot of \nfreedom or creativity for such designs."
  }
  else if (room == "Laser Printer 2")
  {
    roomSound = laserSound2;
    image(LaserPrinter2, 0, 0);
    showInfo = true;
    infoText = "This is a Glowforge laser cutter, for the most part \ncapable of performing the same functions as the Fusion Edge Laser Cutter, \nalbeit more efficiently and at a smaller scale.  \n\nFun Fact, despite what the sign may say, \nthe Glowforge laser cutter is not out of order.  \n\nWe just don't want you using it."
  }
  else if (room == "Game Testing")
  {
    //background(220);
    if (videoEnded == false)
      image(GameTestingEntrance, 0, 0, width, height); // Display the video on the canvas
    else
    {
      roomSound = gameTestingSound;
      image(GameTesting, 0, 0);
      showInfo = true;
      infoText = "The Game Testing room, though not often in use, \nprovides computers for putting to test the games \nyou've spent so much time working on.  \nMeant to act as the average computer one would come across, \nthey serve as good models of the performance and experience \nyou can expect from the average player of a game you make.  \n\nIn this room too are board games as well as games \nfrom consoles like playstation and xbox.  \nWithout the systems necessary to run them, \nhowever, don't ask me what they're there for."
    }
  }
  else if (room == "Audio Booth")
  {
    background(220);
    if (videoEnded == false)
      image(AudioEntrance, 0, 0, width, height); // Display the video on the canvas
    else
      image(AudioBooth, 0, 0);
  }
  else if (room == "Mocap Booth")
  {
    background(220);
    if (videoEnded == false)
      image(MocapEntrance, 0, 0, width, height); // Display the video on the canvas
    else
      image(MocapRoom, 0, 0, width, height);
  }
  
  if (room != "start")
  {
    button.hide();
  }
  
  if (showInfo)
  {
    soundButton.show();
    fill(0, 0, 0, 150); // Semi-transparent black
    rect(100, 150, 600, 300, 10); // Draw a rounded rectangle
    
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(infoText, width / 2, 200);
  }
  else
  {
    soundButton.hide();
  }
  
  // Debug tool: Display mouse X and Y coordinates
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Mouse X: " + mouseX + "\nMouse Y: " + mouseY + "\nCurrent Room: " + room, 10, 10);
}

function mousePressed()
{
  if (room == "MakerSpace1")
  {
    let hoverX = 200;
    let hoverY = 300;
    let hoverWidth = 200;
    let hoverHeight = 200;
    
    let hoverX2 = 400;
    let hoverY2 = 250;
    let hoverWidth2 = 200;
    let hoverHeight2 = 200;
    
    let hoverX3 = 600;
    let hoverY3 = 250;
    let hoverWidth3 = 200;
    let hoverHeight3 = 200;
    
    let hoverX4 = 0;
    let hoverY4 = 100;
    let hoverWidth4 = 100;
    let hoverHeight4 = 200;
    
    // Go to Main Table
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      // Change the room to the next scene
      room = "MainTable";
    }
    
    // Go to Meeting Table
    else if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      //room = "Printer";
    }
    
    // Go to Printer
    else if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      room = "Printer";
    }
    
    // Clear Room
    else if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      room = "MakerSpaceClear";
    }
  }
  else if (room == "MakerSpaceClear")
  {
    let hoverX = 750;
    let hoverY = 150;
    let hoverWidth = 50;
    let hoverHeight = 150;
    
    let hoverX2 = 480;
    let hoverY2 = 150;
    let hoverWidth2 = 40;
    let hoverHeight2 = 100;
    
    let hoverX3 = 430;
    let hoverY3 = 160;
    let hoverWidth3 = 30;
    let hoverHeight3 = 100;
    
    let hoverX4 = 560;
    let hoverY4 = 200;
    let hoverWidth4 = 100;
    let hoverHeight4 = 100;
    
    let hoverX5 = 350;
    let hoverY5 = 180;
    let hoverWidth5 = 50;
    let hoverHeight5 = 100;
    
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      videoEnded = false;
      GameTestingEntrance.hide(); // Hide the default video element
      GameTestingEntrance.play();
      GameTestingEntrance.onended(() => {
      videoEnded = true; // Set this flag to true when video ends
    });
      room = "Game Testing";
    }
    else if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      videoEnded = false;
      AudioEntrance.hide(); // Hide the default video element
      AudioEntrance.play();
      AudioEntrance.onended(() => {
      videoEnded = true; // Set this flag to true when video ends
    });

      room = "Audio Booth";
    }
    else if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      videoEnded = false;
      MocapEntrance.hide(); // Hide the default video element
      MocapEntrance.play();
      MocapEntrance.onended(() => {
      videoEnded = true; // Set this flag to true when video ends
    });
      
      room = "Mocap Booth"
    }
    else if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      room = "Printer";
    }
    else if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
    {
      room = "Maker Space Clear 2";
    }
  }
  else if (room == "MainTable")
  {
    let hoverX = 200;
    let hoverY = 200;
    let hoverWidth = 600;
    let hoverHeight = 100;

    let hoverX2 = 0;
    let hoverY2 = 200;
    let hoverWidth2 = 200;
    let hoverHeight2 = 100;

    let hoverX3 = 480;
    let hoverY3 = 150;
    let hoverWidth3 = 50;
    let hoverHeight3 = 50;

    let hoverX4 = 350;
    let hoverY4 = 150;
    let hoverWidth4 = 50;
    let hoverHeight4 = 50;
    
    let hoverX5 = 0;
    let hoverY5 = 0;
    let hoverWidth5 = 800;
    let hoverHeight5 = 200;

    //Go to Ultimakers
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      room = "Ultimaker";
    }

    //Go to Resin
    else if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      room = "Resin";
    }

    //Go to Ultimaker SOP
    else if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      window.open("https://drive.google.com/file/d/1hLL8MXjnIlBSK1PL8BefAWF92HGD9ZTg/view")
    }

    //Go to Resin SOP
    else if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      window.open("https://drive.google.com/file/d/1m09Hxr-gpmjrnz-eZzqcIn6OF2F25XTf/view")
    }
    
    //Go to Other Side
    else if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
    {
      room = "MainTable2";
    }
  }
  else if (room == "MainTable2")
  {
    //Set hover region 1 Computers
    let hoverX = 50;
    let hoverY = 250;
    let hoverWidth = 100;
    let hoverHeight = 100;
    
    //Set hover region 2 Computers
    let hoverX2 = 750;
    let hoverY2 = 250;
    let hoverWidth2 = 50;
    let hoverHeight2 = 100;
    
    //Set hover region 3 Laser Printer 1
    let hoverX3 = 150;
    let hoverY3 = 250;
    let hoverWidth3 = 200;
    let hoverHeight3 = 100;
    
    //Set hover region 4 Laser Printer 2
    let hoverX4 = 430;
    let hoverY4 = 280;
    let hoverWidth4 = 150;
    let hoverHeight4 = 50;
    
    //Set hover region 5 SOP 1
    let hoverX5 = 190;
    let hoverY5 = 350;
    let hoverWidth5 = 50;
    let hoverHeight5 = 50;
    
    //Set hover region 6 SOP 2
    let hoverX6 = 250;
    let hoverY6 = 370;
    let hoverWidth6 = 50;
    let hoverHeight6 = 50;
    
    //Set hover region 6 Switch
    let hoverX7 = 0;
    let hoverY7 = 0;
    let hoverWidth7 = 800;
    let hoverHeight7 = 250;
    
    if (mouseX > hoverX && mouseX < hoverX + hoverWidth && mouseY > hoverY && mouseY < hoverY + hoverHeight)
    {
      room = "Main Table Computers";
    }
    
    if (mouseX > hoverX2 && mouseX < hoverX2 + hoverWidth2 && mouseY > hoverY2 && mouseY < hoverY2 + hoverHeight2)
    {
      room = "Main Table Computers";
    }
    
    if (mouseX > hoverX3 && mouseX < hoverX3 + hoverWidth3 && mouseY > hoverY3 && mouseY < hoverY3 + hoverHeight3)
    {
      room = "Laser Printer 1";
    }
    
    if (mouseX > hoverX4 && mouseX < hoverX4 + hoverWidth4 && mouseY > hoverY4 && mouseY < hoverY4 + hoverHeight4)
    {
      room = "Laser Printer 2";
    }
    
    if (mouseX > hoverX5 && mouseX < hoverX5 + hoverWidth5 && mouseY > hoverY5 && mouseY < hoverY5 + hoverHeight5)
    {
      window.open("https://drive.google.com/file/d/10Kh497HoCWBpkfGU8rcEOg7WgXjABrDi/view")
    }
    
    if (mouseX > hoverX6 && mouseX < hoverX6 + hoverWidth6 && mouseY > hoverY6 && mouseY < hoverY6 + hoverHeight6)
    {
      window.open("https://drive.google.com/file/d/1As4He8rftmp7ZO_9COuRBWaA40ekK46N/view")
    }
    
    if (mouseX > hoverX7 && mouseX < hoverX7 + hoverWidth7 && mouseY > hoverY7 && mouseY < hoverY7 + hoverHeight7)
    {
      room = "MainTable"
    }
  }
  else if (room == Ultimaker)
  {
    
  }
  else if (room == Resin)
  {
    
  }
}

// Detect key press event
function keyPressed()
{
  if (keyCode === ESCAPE)
  {
    roomSound.stop();
    // Set the room to "MakerSpace1" when ESCAPE is pressed
    room = "MakerSpace1";
  }
}

function beginGame()
{
  room = "MakerSpace1"
}

// Plays the sound when the button is clicked
function playRoomSound() {
  if (roomSound.isPlaying())
  {
    roomSound.stop();
  }
  else
  {
    elevatorMusic.setVolume(0.2); // Lower background music volume
    roomSound.play();
  }
}
