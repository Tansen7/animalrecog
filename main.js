startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iwUiXyeKT/')
}
modelReady()
{
    classifier.classify()
}
gotResults()
{
    
}