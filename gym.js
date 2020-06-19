listGyms= [
    {   
        name: 'ParkCity',
        address: 'ParkCity building, Le Trong Tan street, Ha Dong district, Ha Noi',
        city: 1,
        img: 'gym/gym-1.jpg'
    },
    {
        name: 'Teekiu Sport & Fitness',
        address: '4th floor Van Thanh Hotel, 226 Van Phuc, Ba Dinh district, Ha Noi',
        city: 1,
        img: 'gym/gym-2.jpg'
    },
    {
        name: 'Jade Fitness',
        address: '6th floor, Hoanh Thanh building, 114 Mai Hac De, Hai Ba Trung district, Ha Noi',
        city: 1,
        img: 'gym/gym-3.jpg'
    },
    {
        name: 'SaiYan Fitness',
        address: '5th floor, Central Field building, Trung Kinh street, Cau Giay district, Ha Noi',
        city: 1,
        img: 'gym/gym-4.jpg'
    },
    {
        name: 'Fitness Station',
        address: '2nd floor, Sapphire Palace building, Chinh Kinh street, Thanh Xuan district, Ha Noi',
        city: 1,
        img: 'gym/gym-5.jpg'
    },
    {
        name: 'Gym One',
        address: '247 Dien Bien Phu street, district 3, Ho Chi Minh City',
        city: 2,
        img: 'gym/gym-6.jpg'
    },
    {
        name: 'Advance Fitness & Gym',
        address: 'D1 street, Him Lam Riverside ward, Tan Hung block, district 7, Ho Chi Minh City',
        city: 2,
        img: 'gym/gym-7.jpg'
    },
    {
        name: 'Yofi Center',
        address: '36/15-36/17  Phạm Văn Nghị, Phường Tân Phong, district 7, Ho Chi Minh City',
        city: 2,
        img: 'gym/gym-8.jpg'
    },
    {
        name: 'Star Fitness SaiGon',
        address: '1st floor The Manor, 91 Nguyen Huu Canh street, block 22, Binh Thanh district, Ho Chi Minh City',
        city: 2,
        img: 'gym/gym-9.jpg'
    },
    {
        name: 'VFit Fitness & Yoga Center',
        address: '105 Tran Hung Dao street, block 6, districtdistrict 5, Ho Chi Minh City',
        city: 2,
        img: 'gym/gym-10.jpg'
    }
];

function printList(arr){
let body=document.getElementById('list');
body.innerHTML="";
let list='';
for(let i=0; i<arr.length; i++){
    list+=`<h5>${i+1}. ${arr[i].name}</h5>
    <div><img width=80% height= 500 src="${arr[i].img}" alt=""></div>
    <p>Address: ${arr[i].address}</p>`
}
body.innerHTML+=list;
}

printList(listGyms);

function findLocation(){
    let location=+document.getElementById("location").value;
    console.log(location);
    if(location==1||location==2) {
        let result=listGyms.filter(function(value) {
            return value.city==location;
        }
        )
        printList(result);
    return;
    }
    printList(listGyms);
}