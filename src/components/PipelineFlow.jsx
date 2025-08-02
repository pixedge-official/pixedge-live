import React from 'react';

const PipelineFlow = () => {
  const steps = [
    {
      title: '1. IMAGE / VIDEO COLLECTION',
      points: [
        'CCTV, Drones, Mobiles',
        'IP/RTSP/ONVIF Cameras',
        'Edge Devices (Jetson, Pi)',
        'Time-stamped Frame Capture'
      ]
    },
    {
      title: '2. PREPROCESSING & FILTERING',
      points: [
        'Resize, Crop, Enhance',
        'Lighting Normalization',
        'Background Blur (Optional)',
        'Frame Sampling'
      ]
    },
    {
      title: '3. DATA ANNOTATION',
      points: [
        'Tools: LabelImg, CVAT, V7',
        'OK / NOT OK Labeling',
        'Multi-class: Helmet, Vest',
        'COCO / YOLO format Export'
      ]
    },
    {
      title: '4. DEEP LEARNING ENGINE',
      points: [
        'Models: YOLOv8, Detectron2',
        'Tasks: Object Detection',
        'Classifier: OK / NOT OK',
        'Multi-class: PPE, Zones',
        'Deployed: Cloud / Edge TRT'
      ]
    },
    {
      title: '5. VISUAL LANGUAGE MODELS',
      points: [
        'Use: CLIP, GPT-4V, Gemini',
        'Match text prompts w/ image',
        'Understand scene context',
        '"Is this worker unsafe?"',
        'Zero-shot / Few-shot logic'
      ]
    },
    {
      title: '6. REAL-TIME INFERENCE',
      points: [
        'Low Latency (<300ms)',
        'Annotated Frames Out',
        'Detect + Classify Events',
        'Log: Timestamp + Class'
      ]
    },
    {
      title: '7. RESULT STORAGE',
      points: [
        'PostgreSQL: Metadata/Events',
        'S3 / GCP: Image/Video Blobs',
        'JSON: camera_id, class, ts',
        'Time Series DB (optional)'
      ]
    },
    {
      title: '8. ALERTING SYSTEM',
      points: [
        'OK → No Action',
        'NOT OK → Trigger Alert',
        'Channels: Email/SMS/App',
        'Escalation Rules'
      ]
    },
    {
      title: '9. DASHBOARD & ANALYTICS',
      points: [
        'Live Detection Feed',
        'OK vs NOT OK Trends',
        'Heatmaps, Zone Charts',
        'Compliance Reports Export'
      ]
    },
    {
      title: '10. ADMIN CONTROLS',
      points: [
        'Add/Edit Cameras & Rules',
        'Model Upload & Retraining',
        'User Access & Roles',
        'View Logs / System Health'
      ]
    },
    {
      title: '11. SECURITY & COMPLIANCE',
      points: [
        'TLS/AES Encryption',
        'GDPR/OSHA/Data Policy',
        'Face Blur / Masking',
        'Audit Trail + Retention'
      ]
    }
  ];

  return (
    <div className="bg-white py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">🧠 AI Safety Intelligence Pipeline</h2>
      <div className="space-y-10">
        {steps.map((step, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">{step.title}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {step.points.map((point, i) => (
                <li key={i}>✅ {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineFlow;
