// // // // let user;
// // // // user =[
// // // //     {
// // // //         "source": "4611690927219091025",
// // // //         "target": "4611690927219091025",
// // // //         "data": {
// // // //             "SeqNum": "2",
// // // //             "TS": "10",     // 9:21:14 AM
// // // //             "type": "outputEdgeLabel",
// // // //             "edgeLabelData": "4 Thread, 20432ms ",
// // // //             "putMyLabelAt": 0.5,
// // // //             "index": 2,
   //////// //         "toolTipData": "&nbsp;&nbsp;<b>Type: </b>Thread<br/><br/><b>Total Calls: </b>5<br/><br/><b>Response Time: </b>20432<br/><br/><b>Percentage: </b>340533.33%"
  //////  //     }
//  // // // },
// // // //     {
// // // //         "source": "4611690927219091025",
// // // //         "target": "4611690927219091025",
// // // //         "data": {
// // // //             "SeqNum": "1",
// // // //             "TS": "10",    //  9:21:14 AM
// // // //             "type": "outputEdgeLabel",
// // // //             "edgeLabelData": "4",
// // // //             "putMyLabelAt": 0.5,
// // // //             "index": 3,
// // // //             "toolTipData": "&nbsp;&nbsp;<b>Type: </b>Thread<br/><br/><b>Total Calls: </b>5<br/><br/><b>Response Time: </b>20432<br/><br/><b>Percentage: </b>340533.33%"
// // // //         }
// // // //     },
// // // //     {
// // // //         "source": "4611690927219091025",
// // // //         "target": "4611690927219091025",
// // // //         "data": {
// // // //             "SeqNum": "4",
// // // //             "TS": "5",
// // // //             "type": "outputEdgeLabel",
// // // //             "edgeLabelData": "4 Thread, 20432ms ",
// // // //             "putMyLabelAt": 0.5,
// // // //             "index": 4,
// // // //             "toolTipData": "&nbsp;&nbsp;<b>Type: </b>Thread<br/><br/><b>Total Calls: </b>5<br/><br/><b>Response Time: </b>20432<br/><br/><b>Percentage: </b>340533.33%"
// // // //         }
// // // //     },
// // // //     {
// // // //         "source": "4611690927219098964",
// // // //         "target": "4611690927219098964",
// // // //         "data": {
// // // //             "SeqNum": "10",
// // // //             "TS": "5",  //9:21:14 AM
// // // //             "type": "outputEdgeLabel",
// // // //             "edgeLabelData": "5 Thread, 242ms ",
// // // //             "putMyLabelAt": 0.5,
// // // //             "index": 5,
// // // //             "toolTipData": "&nbsp;&nbsp;<b>Type: </b>Thread<br/><br/><b>Total Calls: </b>6<br/><br/><b>Response Time: </b>242<br/><br/><b>Percentage: </b>4033.33%"
// // // //         }
// // // //     },
// // // //     {
// // // //         "source": "4611690927219098964",
// // // //         "target": "4611690927219098964",
// // // //         "data": {
// // // //             "SeqNum": "34",
// // // //             "TS": "6", //9:21:14 AM
// // // //             "type": "outputEdgeLabel",
// // // //             "edgeLabelData": "5 Thread, 242ms ",
// // // //             "putMyLabelAt": 0.5,
// // // //             "index": 6,
// // // //             "toolTipData": "&nbsp;&nbsp;<b>Type: </b>Thread<br/><br/><b>Total Calls: </b>6<br/><br/><b>Response Time: </b>242<br/><br/><b>Percentage: </b>4033.33%"
// // // //         }
// // // //     }
    
// // // // ]

// // // // let data =user.sort((a, b) =>{

// // // //         console.log('a-->',a);
// // // //         console.log('b-->',b);
// // // //         console.log('next comparison');
// // // //     if (a.data.TS < b.data.TS) 
// // // //     {
// // // //         console.log('inside if');
// // // //       return -1;
// // // //     } else if (a.data.TS > b.data.TS) 
// // // //     {
// // // //         console.log('inside else if');
// // // //       return 1;
// // // //     } else {
           
// // // //       if (a.data.SeqNum < b.data.SeqNum) 
// // // //       {
// // // //         console.log('inside else of if');
// // // //         return -1;
        
// // // //       }
      
// // // //       else if (a.data.SeqNum > b.data.SeqNum) 
// // // //       {
// // // //         console.log('inside else of else if');
// // // //         return 1;
// // // //       } else {
// // // //         console.log('inside else');
// // // //         return 0;
// // // //       }
// // // //     }
    
// // // //   });
  

// // // // // console.log("data : " , data)


// // // function someAsyncFunction(){
// // //   return 1;
// // // }

// // // function someOtherAsyncFunction(){
// // //   return 2;
// // // }



// // // async function example() {
// // //   const result1 = await someAsyncFunction();
// // //   const result2 = await (async () => {
// // //     const innerResult = await someOtherAsyncFunction();
// // //     return innerResult * 2;
// // //   })();
// // //   console.log(result1, result2);
// // // }

// // // console.log('result1',result1);






// // console.log('result1',result1);


// let ans=0;
// let truee=1;

// async function getPodName(){
//   console.log('inside get pod name');

//   const exec = require('util').promisify(require('child_process').exec)

//   const {stdout,stderr} = await exec('hostname');
//   if(stderr) podname = "pod"

//   else podname = stdout

//   console.log('stdout-------->',stdout);
//   console.log('stderr--------->',stderr);
// return podname
// }

   
// getPodName().then((data)=>{
//   console.log('data',data);
// });    




// // console.log(data);












// if(tagfilePath!=undefined ){
//   try {
//       console.log('inside try');
//       fs.accessSync(tagfilePath,fs.constants.R_OK)
//       if(this.ndpropResolverMap.has(tagfilePath)){
//           console.log('inside');
//           this.ndpropResovler = this.ndpropResolverMap.get(tagfilePath);
//           value=await this.ndpropResovler.resolve(tagvalue); 
//           }
//           else{  
//               console.log('else');
//            this.ndpropResovler = new NDPropertyBasedResolver(tagfilePath);
//            this.ndpropResolverMap.set(tagfilePath,this.ndpropResovler)    
//             value=await this.ndpropResovler.resolve(tagvalue);
//        }
//      return value; 
      
//   } catch (error) {
//       console.log('err',error);
//       console.log('no read access to a file');
//   }               
// } 




// react.createElement=>object=>html(dom)
// const heading =React.createElement("h1",{
//     id:"title",
//     className:"class",
//     style:{
//         color:"red"
//     },
//     key:"heading1"
// },"hello from everyone");
// const heading2= React.createElement("h2",{
//     style:{
//         color:"green",

//     },
//     key:"k1"
// },"my name is arun");
// console.log(heading2);

// jsx=>react.createElement=>object=>html(dom)
// const Heading3= () => (
// <h1 id="heading3" key="head" >
//     namaste javascript
//     </h1>
// );

//components
//type of component
// 1.functional Component new
// 2.class based component old
// name of a component is always with capital letter

// const container=React.createElement("div",{
//     id:'container'
// },[heading,heading2,Heading3]);

// React Fragement
// syntax <React.Fragement></React.Fragement>
// short <> </>


// const arun={
// name:"arun",
// place:'delhi'


// }
// const fs=require('fs');
// const zlib = require('zlib');  
// const gzip = zlib.createGzip();  
// ;  
// const inp = fs.createReadStream('input.txt');  
// const out = fs.createWriteStream('input.txt.gz');  
// inp.pipe(gzip).pipe(out);  


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// const arun={ "name"   : "John Smith",
//   "sku"    : "20223",
//   "price"  : 23.95,
//   "shipTo" : { "name" : "Jane Smith",
//                "address" : "123 Maple Street",
//                "city" : "Pretendville",
//                "state" : "NY",
//                "zip"   : "12345" },
//   "billTo" : { "name" : "John Smith",
//                "address" : "123 Maple Street",
//                "city" : "Pretendville",
//                "state" : "NY",
//                "zip"   : "12345" }
// }

// console.log(arun);


// const fs = require('fs');

// // Specify the path to the file you want to read
// const filePath = '/home/cavisson/file/arun.properties';

// // Read the file
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // The contents of the file will be available in the 'data' variable
//   console.log(data);
// });


const process=require('process');
console.log(process.cwd());