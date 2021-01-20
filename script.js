const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const modelLoaded = () => {
  console.log('Model Loaded');
};
const classifier = ml5.imageClassifier(
  'https://teachablemachine.withgoogle.com/models/lCpeEKmWx/model.json',
  modelLoaded
);
const gotResult = (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.querySelector('#data').innerHTML = results[0].label;
  }
};

Webcam.attach('#webcamContainer');

btn1.addEventListener('click', () => {
  Webcam.snap((data_uri) => {
    document.querySelector(
      '#outputDiv'
    ).innerHTML = `<img src=${data_uri} id="dataUri"/>`;
  });
});

btn2.addEventListener('click', () => {
  classifier.classify(document.querySelector('#dataUri'), gotResult);
});
