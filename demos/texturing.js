// *********************************************************************************************************************
// **                                                                                                                 **
// **             Texturing example, Cube is mapped with 2D texture, skybox is mapped with a Cubemap                  **
// **                                                                                                                 **
// *********************************************************************************************************************

// * Change textures
// * Combine several textures in fragment shaders
// * Distort UV coordinates
// * Change texture filtering for pixel graphics
// * Use wrapping modes for texture tiling


let positions = new Float32Array([
   0.0000,0.0000,-1.0000,0.4253,-0.3090,-0.8507,-0.1625,-0.5000,-0.8507,0.7236,-0.5257,-0.4472,0.4253,-0.3090,-0.8507,0.8506,0.0000,-0.5257,0.0000,0.0000,-1.0000,-0.1625,-0.5000,-0.8507,-0.5257,0.0000,-0.8507,0.0000,0.0000,-1.0000,-0.5257,0.0000,-0.8507,-0.1625,0.5000,-0.8507,0.0000,0.0000,-1.0000,-0.1625,0.5000,-0.8507,0.4253,0.3090,-0.8507,0.7236,-0.5257,-0.4472,0.8506,0.0000,-0.5257,0.9511,-0.3090,0.0000,-0.2764,-0.8506,-0.4472,0.2629,-0.8090,-0.5257,0.0000,-1.0000,0.0000,-0.8944,0.0000,-0.4472,-0.6882,-0.5000,-0.5257,-0.9511,-0.3090,0.0000,-0.2764,0.8506,-0.4472,-0.6882,0.5000,-0.5257,-0.5878,0.8090,0.0000,0.7236,0.5257,-0.4472,0.2629,0.8090,-0.5257,0.5878,0.8090,0.0000,0.7236,-0.5257,-0.4472,0.9511,-0.3090,0.0000,0.5878,-0.8090,0.0000,-0.2764,-0.8506,-0.4472,0.0000,-1.0000,0.0000,-0.5878,-0.8090,0.0000,-0.8944,0.0000,-0.4472,-0.9511,-0.3090,0.0000,-0.9511,0.3090,0.0000,-0.2764,0.8506,-0.4472,-0.5878,0.8090,0.0000,0.0000,1.0000,0.0000,0.7236,0.5257,-0.4472,0.5878,0.8090,0.0000,0.9511,0.3090,0.0000,0.2764,-0.8506,0.4472,0.6882,-0.5000,0.5257,0.1625,-0.5000,0.8507,-0.7236,-0.5257,0.4472,-0.2629,-0.8090,0.5257,-0.4253,-0.3090,0.8507,-0.7236,0.5257,0.4472,-0.8506,0.0000,0.5257,-0.4253,0.3090,0.8507,0.2764,0.8506,0.4472,-0.2629,0.8090,0.5257,0.1625,0.5000,0.8507,0.8944,0.0000,0.4472,0.6882,0.5000,0.5257,0.5257,0.0000,0.8507,0.5257,0.0000,0.8507,0.1625,0.5000,0.8507,0.0000,0.0000,1.0000,0.5257,0.0000,0.8507,0.6882,0.5000,0.5257,0.1625,0.5000,0.8507,0.6882,0.5000,0.5257,0.2764,0.8506,0.4472,0.1625,0.5000,0.8507,0.1625,0.5000,0.8507,-0.4253,0.3090,0.8507,0.0000,0.0000,1.0000,0.1625,0.5000,0.8507,-0.2629,0.8090,0.5257,-0.4253,0.3090,0.8507,-0.2629,0.8090,0.5257,-0.7236,0.5257,0.4472,-0.4253,0.3090,0.8507,-0.4253,0.3090,0.8507,-0.4253,-0.3090,0.8507,0.0000,0.0000,1.0000,-0.4253,0.3090,0.8507,-0.8506,0.0000,0.5257,-0.4253,-0.3090,0.8507,-0.8506,0.0000,0.5257,-0.7236,-0.5257,0.4472,-0.4253,-0.3090,0.8507,-0.4253,-0.3090,0.8507,0.1625,-0.5000,0.8507,0.0000,0.0000,1.0000,-0.4253,-0.3090,0.8507,-0.2629,-0.8090,0.5257,0.1625,-0.5000,0.8507,-0.2629,-0.8090,0.5257,0.2764,-0.8506,0.4472,0.1625,-0.5000,0.8507,0.1625,-0.5000,0.8507,0.5257,0.0000,0.8507,0.0000,0.0000,1.0000,0.1625,-0.5000,0.8507,0.6882,-0.5000,0.5257,0.5257,0.0000,0.8507,0.6882,-0.5000,0.5257,0.8944,0.0000,0.4472,0.5257,0.0000,0.8507,0.9511,0.3090,0.0000,0.6882,0.5000,0.5257,0.8944,0.0000,0.4472,0.9511,0.3090,0.0000,0.5878,0.8090,0.0000,0.6882,0.5000,0.5257,0.5878,0.8090,0.0000,0.2764,0.8506,0.4472,0.6882,0.5000,0.5257,0.0000,1.0000,0.0000,-0.2629,0.8090,0.5257,0.2764,0.8506,0.4472,0.0000,1.0000,0.0000,-0.5878,0.8090,0.0000,-0.2629,0.8090,0.5257,-0.5878,0.8090,0.0000,-0.7236,0.5257,0.4472,-0.2629,0.8090,0.5257,-0.9511,0.3090,0.0000,-0.8506,0.0000,0.5257,-0.7236,0.5257,0.4472,-0.9511,0.3090,0.0000,-0.9511,-0.3090,0.0000,-0.8506,0.0000,0.5257,-0.9511,-0.3090,0.0000,-0.7236,-0.5257,0.4472,-0.8506,0.0000,0.5257,-0.5878,-0.8090,0.0000,-0.2629,-0.8090,0.5257,-0.7236,-0.5257,0.4472,-0.5878,-0.8090,0.0000,0.0000,-1.0000,0.0000,-0.2629,-0.8090,0.5257,0.0000,-1.0000,0.0000,0.2764,-0.8506,0.4472,-0.2629,-0.8090,0.5257,0.5878,-0.8090,0.0000,0.6882,-0.5000,0.5257,0.2764,-0.8506,0.4472,0.5878,-0.8090,0.0000,0.9511,-0.3090,0.0000,0.6882,-0.5000,0.5257,0.9511,-0.3090,0.0000,0.8944,0.0000,0.4472,0.6882,-0.5000,0.5257,0.5878,0.8090,0.0000,0.0000,1.0000,0.0000,0.2764,0.8506,0.4472,0.5878,0.8090,0.0000,0.2629,0.8090,-0.5257,0.0000,1.0000,0.0000,0.2629,0.8090,-0.5257,-0.2764,0.8506,-0.4472,0.0000,1.0000,0.0000,-0.5878,0.8090,0.0000,-0.9511,0.3090,0.0000,-0.7236,0.5257,0.4472,-0.5878,0.8090,0.0000,-0.6882,0.5000,-0.5257,-0.9511,0.3090,0.0000,-0.6882,0.5000,-0.5257,-0.8944,0.0000,-0.4472,-0.9511,0.3090,0.0000,-0.9511,-0.3090,0.0000,-0.5878,-0.8090,0.0000,-0.7236,-0.5257,0.4472,-0.9511,-0.3090,0.0000,-0.6882,-0.5000,-0.5257,-0.5878,-0.8090,0.0000,-0.6882,-0.5000,-0.5257,-0.2764,-0.8506,-0.4472,-0.5878,-0.8090,0.0000,0.0000,-1.0000,0.0000,0.5878,-0.8090,0.0000,0.2764,-0.8506,0.4472,0.0000,-1.0000,0.0000,0.2629,-0.8090,-0.5257,0.5878,-0.8090,0.0000,0.2629,-0.8090,-0.5257,0.7236,-0.5257,-0.4472,0.5878,-0.8090,0.0000,0.9511,-0.3090,0.0000,0.9511,0.3090,0.0000,0.8944,0.0000,0.4472,0.9511,-0.3090,0.0000,0.8506,0.0000,-0.5257,0.9511,0.3090,0.0000,0.8506,0.0000,-0.5257,0.7236,0.5257,-0.4472,0.9511,0.3090,0.0000,0.4253,0.3090,-0.8507,0.2629,0.8090,-0.5257,0.7236,0.5257,-0.4472,0.4253,0.3090,-0.8507,-0.1625,0.5000,-0.8507,0.2629,0.8090,-0.5257,-0.1625,0.5000,-0.8507,-0.2764,0.8506,-0.4472,0.2629,0.8090,-0.5257,-0.1625,0.5000,-0.8507,-0.6882,0.5000,-0.5257,-0.2764,0.8506,-0.4472,-0.1625,0.5000,-0.8507,-0.5257,0.0000,-0.8507,-0.6882,0.5000,-0.5257,-0.5257,0.0000,-0.8507,-0.8944,0.0000,-0.4472,-0.6882,0.5000,-0.5257,-0.5257,0.0000,-0.8507,-0.6882,-0.5000,-0.5257,-0.8944,0.0000,-0.4472,-0.5257,0.0000,-0.8507,-0.1625,-0.5000,-0.8507,-0.6882,-0.5000,-0.5257,-0.1625,-0.5000,-0.8507,-0.2764,-0.8506,-0.4472,-0.6882,-0.5000,-0.5257,0.8506,0.0000,-0.5257,0.4253,0.3090,-0.8507,0.7236,0.5257,-0.4472,0.8506,0.0000,-0.5257,0.4253,-0.3090,-0.8507,0.4253,0.3090,-0.8507,0.4253,-0.3090,-0.8507,0.0000,0.0000,-1.0000,0.4253,0.3090,-0.8507,-0.1625,-0.5000,-0.8507,0.2629,-0.8090,-0.5257,-0.2764,-0.8506,-0.4472,-0.1625,-0.5000,-0.8507,0.4253,-0.3090,-0.8507,0.2629,-0.8090,-0.5257,0.4253,-0.3090,-0.8507,0.7236,-0.5257,-0.4472,0.2629,-0.8090,-0.5257
]);

let normals = new Float32Array([
    0.1024,-0.3151,-0.9435,0.1024,-0.3151,-0.9435,0.1024,-0.3151,-0.9435,0.7002,-0.2680,-0.6617,0.7002,-0.2680,-0.6617,0.7002,-0.2680,-0.6617,-0.2680,-0.1947,-0.9435,-0.2680,-0.1947,-0.9435,-0.2680,-0.1947,-0.9435,-0.2680,0.1947,-0.9435,-0.2680,0.1947,-0.9435,-0.2680,0.1947,-0.9435,0.1024,0.3151,-0.9435,0.1024,0.3151,-0.9435,0.1024,0.3151,-0.9435,0.9050,-0.2680,-0.3304,0.9050,-0.2680,-0.3304,0.9050,-0.2680,-0.3304,0.0247,-0.9435,-0.3304,0.0247,-0.9435,-0.3304,0.0247,-0.9435,-0.3304,-0.8897,-0.3151,-0.3304,-0.8897,-0.3151,-0.3304,-0.8897,-0.3151,-0.3304,-0.5746,0.7488,-0.3304,-0.5746,0.7488,-0.3304,-0.5746,0.7488,-0.3304,0.5346,0.7779,-0.3304,0.5346,0.7779,-0.3304,0.5346,0.7779,-0.3304,0.8026,-0.5831,-0.1256,0.8026,-0.5831,-0.1256,0.8026,-0.5831,-0.1256,-0.3066,-0.9435,-0.1256,-0.3066,-0.9435,-0.1256,-0.3066,-0.9435,-0.1256,-0.9921,0.0000,-0.1256,-0.9921,0.0000,-0.1256,-0.9921,0.0000,-0.1256,-0.3066,0.9435,-0.1256,-0.3066,0.9435,-0.1256,-0.3066,0.9435,-0.1256,0.8026,0.5831,-0.1256,0.8026,0.5831,-0.1256,0.8026,0.5831,-0.1256,0.4089,-0.6284,0.6617,0.4089,-0.6284,0.6617,0.4089,-0.6284,0.6617,-0.4713,-0.5831,0.6617,-0.4713,-0.5831,0.6617,-0.4713,-0.5831,0.6617,-0.7002,0.2680,0.6617,-0.7002,0.2680,0.6617,-0.7002,0.2680,0.6617,0.0385,0.7488,0.6617,0.0385,0.7488,0.6617,0.0385,0.7488,0.6617,0.7240,0.1947,0.6617,0.7240,0.1947,0.6617,0.7240,0.1947,0.6617,0.2680,0.1947,0.9435,0.2680,0.1947,0.9435,0.2680,0.1947,0.9435,0.4911,0.3568,0.7947,0.4911,0.3568,0.7947,0.4911,0.3568,0.7947,0.4089,0.6284,0.6617,0.4089,0.6284,0.6617,0.4089,0.6284,0.6617,-0.1024,0.3151,0.9435,-0.1024,0.3151,0.9435,-0.1024,0.3151,0.9435,-0.1876,0.5773,0.7947,-0.1876,0.5773,0.7947,-0.1876,0.5773,0.7947,-0.4713,0.5831,0.6617,-0.4713,0.5831,0.6617,-0.4713,0.5831,0.6617,-0.3313,0.0000,0.9435,-0.3313,0.0000,0.9435,-0.3313,0.0000,0.9435,-0.6071,0.0000,0.7947,-0.6071,0.0000,0.7947,-0.6071,0.0000,0.7947,-0.7002,-0.2680,0.6617,-0.7002,-0.2680,0.6617,-0.7002,-0.2680,0.6617,-0.1024,-0.3151,0.9435,-0.1024,-0.3151,0.9435,-0.1024,-0.3151,0.9435,-0.1876,-0.5773,0.7947,-0.1876,-0.5773,0.7947,-0.1876,-0.5773,0.7947,0.0385,-0.7488,0.6617,0.0385,-0.7488,0.6617,0.0385,-0.7488,0.6617,0.2680,-0.1947,0.9435,0.2680,-0.1947,0.9435,0.2680,-0.1947,0.9435,0.4911,-0.3568,0.7947,0.4911,-0.3568,0.7947,0.4911,-0.3568,0.7947,0.7240,-0.1947,0.6617,0.7240,-0.1947,0.6617,0.7240,-0.1947,0.6617,0.8897,0.3151,0.3304,0.8897,0.3151,0.3304,0.8897,0.3151,0.3304,0.7947,0.5773,0.1876,0.7947,0.5773,0.1876,0.7947,0.5773,0.1876,0.5746,0.7488,0.3304,0.5746,0.7488,0.3304,0.5746,0.7488,0.3304,-0.0247,0.9435,0.3304,-0.0247,0.9435,0.3304,-0.0247,0.9435,0.3304,-0.3035,0.9342,0.1876,-0.3035,0.9342,0.1876,-0.3035,0.9342,0.1876,-0.5346,0.7779,0.3304,-0.5346,0.7779,0.3304,-0.5346,0.7779,0.3304,-0.9050,0.2680,0.3304,-0.9050,0.2680,0.3304,-0.9050,0.2680,0.3304,-0.9822,0.0000,0.1876,-0.9822,0.0000,0.1876,-0.9822,0.0000,0.1876,-0.9050,-0.2680,0.3304,-0.9050,-0.2680,0.3304,-0.9050,-0.2680,0.3304,-0.5346,-0.7779,0.3304,-0.5346,-0.7779,0.3304,-0.5346,-0.7779,0.3304,-0.3035,-0.9342,0.1876,-0.3035,-0.9342,0.1876,-0.3035,-0.9342,0.1876,-0.0247,-0.9435,0.3304,-0.0247,-0.9435,0.3304,-0.0247,-0.9435,0.3304,0.5746,-0.7488,0.3304,0.5746,-0.7488,0.3304,0.5746,-0.7488,0.3304,0.7947,-0.5773,0.1876,0.7947,-0.5773,0.1876,0.7947,-0.5773,0.1876,0.8897,-0.3151,0.3304,0.8897,-0.3151,0.3304,0.8897,-0.3151,0.3304,0.3066,0.9435,0.1256,0.3066,0.9435,0.1256,0.3066,0.9435,0.1256,0.3035,0.9342,-0.1876,0.3035,0.9342,-0.1876,0.3035,0.9342,-0.1876,0.0247,0.9435,-0.3304,0.0247,0.9435,-0.3304,0.0247,0.9435,-0.3304,-0.8026,0.5831,0.1256,-0.8026,0.5831,0.1256,-0.8026,0.5831,0.1256,-0.7947,0.5773,-0.1876,-0.7947,0.5773,-0.1876,-0.7947,0.5773,-0.1876,-0.8897,0.3151,-0.3304,-0.8897,0.3151,-0.3304,-0.8897,0.3151,-0.3304,-0.8026,-0.5831,0.1256,-0.8026,-0.5831,0.1256,-0.8026,-0.5831,0.1256,-0.7947,-0.5773,-0.1876,-0.7947,-0.5773,-0.1876,-0.7947,-0.5773,-0.1876,-0.5746,-0.7488,-0.3304,-0.5746,-0.7488,-0.3304,-0.5746,-0.7488,-0.3304,0.3066,-0.9435,0.1256,0.3066,-0.9435,0.1256,0.3066,-0.9435,0.1256,0.3035,-0.9342,-0.1876,0.3035,-0.9342,-0.1876,0.3035,-0.9342,-0.1876,0.5346,-0.7779,-0.3304,0.5346,-0.7779,-0.3304,0.5346,-0.7779,-0.3304,0.9921,0.0000,0.1256,0.9921,0.0000,0.1256,0.9921,0.0000,0.1256,0.9822,0.0000,-0.1876,0.9822,0.0000,-0.1876,0.9822,0.0000,-0.1876,0.9050,0.2680,-0.3304,0.9050,0.2680,-0.3304,0.9050,0.2680,-0.3304,0.4713,0.5831,-0.6617,0.4713,0.5831,-0.6617,0.4713,0.5831,-0.6617,0.1876,0.5773,-0.7947,0.1876,0.5773,-0.7947,0.1876,0.5773,-0.7947,-0.0385,0.7488,-0.6617,-0.0385,0.7488,-0.6617,-0.0385,0.7488,-0.6617,-0.4089,0.6284,-0.6617,-0.4089,0.6284,-0.6617,-0.4089,0.6284,-0.6617,-0.4911,0.3568,-0.7947,-0.4911,0.3568,-0.7947,-0.4911,0.3568,-0.7947,-0.7240,0.1947,-0.6617,-0.7240,0.1947,-0.6617,-0.7240,0.1947,-0.6617,-0.7240,-0.1947,-0.6617,-0.7240,-0.1947,-0.6617,-0.7240,-0.1947,-0.6617,-0.4911,-0.3568,-0.7947,-0.4911,-0.3568,-0.7947,-0.4911,-0.3568,-0.7947,-0.4089,-0.6284,-0.6617,-0.4089,-0.6284,-0.6617,-0.4089,-0.6284,-0.6617,0.7002,0.2680,-0.6617,0.7002,0.2680,-0.6617,0.7002,0.2680,-0.6617,0.6071,0.0000,-0.7947,0.6071,0.0000,-0.7947,0.6071,0.0000,-0.7947,0.3313,0.0000,-0.9435,0.3313,0.0000,-0.9435,0.3313,0.0000,-0.9435,-0.0385,-0.7488,-0.6617,-0.0385,-0.7488,-0.6617,-0.0385,-0.7488,-0.6617,0.1876,-0.5773,-0.7947,0.1876,-0.5773,-0.7947,0.1876,-0.5773,-0.7947,0.4713,-0.5831,-0.6617,0.4713,-0.5831,-0.6617,0.4713,-0.5831,-0.6617
]);

let uvs = new Float32Array([
   -0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297,-0.1734,0.2297,0.8266,0.2297,0.8266,1.2297
]);

let triangles = new Uint16Array([
   0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239
]);

let skyboxPositions = new Float32Array([
    -1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0
]);

let skyboxTriangles = new Uint16Array([
    0, 2, 1,
    2, 3, 1
]);


// language=GLSL
let fragmentShader = `
    #version 300 es
    precision highp float;
    
    uniform sampler2D tex;
    uniform float time;
    
    in vec2 v_uv;
    
    out vec4 outColor;
    
    void main()
    {        
        outColor = texture(tex, (v_uv + 0.5) * 1.5 * cos(time * 2.0))
                / texture(tex, (v_uv + 0.5) * 3.0 * cos(time * 8.46641));
    }
`;

// language=GLSL
let vertexShader = `
    #version 300 es
            
    uniform mat4 modelViewProjectionMatrix;
    
    layout(location=0) in vec3 position;
    layout(location=1) in vec3 normal;
    layout(location=2) in vec2 uv;
        
    out vec2 v_uv;
    
    void main()
    {
        gl_Position = modelViewProjectionMatrix * vec4(position, 1.0) * 1.2;           
        v_uv = uv;
    }
`;


// language=GLSL
let skyboxFragmentShader = `
    #version 300 es
    precision mediump float;
    
    uniform samplerCube cubemap;
    uniform samplerCube cubemap2;
    uniform mat4 viewProjectionInverse;
    uniform float time;
    in vec4 v_position;
    
    out vec4 outColor;
    
    void main() {
      vec4 t = viewProjectionInverse * v_position;
      outColor = texture(cubemap, normalize(t.xyz / t.w)) - 0.2 * tan(time + 1.0) * texture(cubemap2, normalize(t.xyz / t.w ));
    }
`;

// language=GLSL
let skyboxVertexShader = `
    #version 300 es
    
    layout(location=0) in vec4 position;
    out vec4 v_position;
    
    void main() {
      v_position = position;
      gl_Position = position;
    }
`;

app.cullBackfaces();

let program = app.createProgram(vertexShader.trim(), fragmentShader.trim());
let skyboxProgram = app.createProgram(skyboxVertexShader.trim(), skyboxFragmentShader.trim());

let vertexArray = app.createVertexArray()
    .vertexAttributeBuffer(0, app.createVertexBuffer(PicoGL.FLOAT, 3, positions))
    .vertexAttributeBuffer(1, app.createVertexBuffer(PicoGL.FLOAT, 3, normals))
    .vertexAttributeBuffer(2, app.createVertexBuffer(PicoGL.FLOAT, 2, uvs))
    .indexBuffer(app.createIndexBuffer(PicoGL.UNSIGNED_SHORT, 3, triangles));

let skyboxArray = app.createVertexArray()
    .vertexAttributeBuffer(0, app.createVertexBuffer(PicoGL.FLOAT, 3, skyboxPositions))
    .indexBuffer(app.createIndexBuffer(PicoGL.UNSIGNED_SHORT, 3, skyboxTriangles));

let projMatrix = mat4.create();
let viewMatrix = mat4.create();
let viewProjMatrix = mat4.create();
let modelMatrix = mat4.create();
let modelViewMatrix = mat4.create();
let modelViewProjectionMatrix = mat4.create();
let rotateXMatrix = mat4.create();
let rotateYMatrix = mat4.create();
let skyboxViewProjectionInverse = mat4.create();


loadImages(["images/doyoknodawaelapis.jpg", "images/Knuckles.jpg"], function (images) {
    let drawCall = app.createDrawCall(program, vertexArray)
        .texture("tex", app.createTexture2D(images[0], images[0].width, images[0].height, {flipY: true, magFilter: PicoGL.ANISOTROPIC, wrapT: PicoGL.MIRRORED_REPEAT, wrapS: PicoGL.MIRRORED_REPEAT}));

    let skyboxDrawCall = app.createDrawCall(skyboxProgram, skyboxArray)
        .texture("cubemap", app.createCubemap({cross: images[1]}))
        
        .texture("cubemap2", app.createCubemap({
            negX: images[0],
            posX: images[0],
            negY: images[0],
            posY: images[0],
            negZ: images[0],
            posZ: images[0]
        }));

    let startTime = new Date().getTime() / 1000;


    function draw() {
        let time = new Date().getTime() / 1000 - startTime;

        mat4.perspective(projMatrix, Math.PI / 2.2, app.width / app.height, 0.1, 100.0);
        let camPos = vec3.rotateY(vec3.create(), vec3.fromValues(0, -1, 2), vec3.fromValues(0, 0, 0), time * 0.55);
        mat4.lookAt(viewMatrix, camPos, vec3.fromValues(0, 0, 0), vec3.fromValues(0, 1, 0));
        mat4.multiply(viewProjMatrix, projMatrix, viewMatrix);

        mat4.fromXRotation(rotateXMatrix, time * 0.09136 - Math.PI / 2);
        mat4.fromZRotation(rotateYMatrix, time * 0.09235);
        mat4.multiply(modelMatrix, rotateXMatrix, rotateYMatrix);

        mat4.multiply(modelViewMatrix, viewMatrix, modelMatrix);
        mat4.multiply(modelViewProjectionMatrix, viewProjMatrix, modelMatrix);

        let skyboxView = mat4.clone(viewMatrix);
        mat4.setTranslation(skyboxView, vec3.fromValues(0, 0, 0));
        let skyboxViewProjectionMatrix = mat4.create();
        mat4.mul(skyboxViewProjectionMatrix, projMatrix, skyboxView);
        mat4.invert(skyboxViewProjectionInverse, skyboxViewProjectionMatrix);

        app.clear();

        app.noDepthTest();
        skyboxDrawCall.uniform("viewProjectionInverse", skyboxViewProjectionInverse);
        skyboxDrawCall.draw();

        app.depthTest();
        drawCall.uniform("modelViewProjectionMatrix", modelViewProjectionMatrix);
        drawCall.draw();

        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
});