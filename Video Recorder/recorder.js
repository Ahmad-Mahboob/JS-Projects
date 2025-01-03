const preview = document.getElementById('preview');
const playback = document.getElementById('playback');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let mediaRecorder;
let recordedChunks = [];

// Start video stream
async function startStream() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  preview.srcObject = stream;
  return stream;
}

// Start recording
startBtn.addEventListener('click', async () => {
  const stream = await startStream();
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) recordedChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
    playback.src = URL.createObjectURL(videoBlob);
    recordedChunks = [];
  };

  mediaRecorder.start();
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

// Stop recording
stopBtn.addEventListener('click', () => {
  mediaRecorder.stop();
  preview.srcObject.getTracks().forEach(track => track.stop());
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
