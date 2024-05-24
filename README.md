# react-native-aliyun-vod-upload

## Getting started

`$ npm install react-native-aliyun-video-upload`

### iOS

`cd ios && pod install && cd ..`

### Android

Add aliyun repo to `android/build.gradle`

```gradle
repositories {
    // ...
    maven {
      url "https://maven.aliyun.com/nexus/content/repositories/releases"
    }
}
```

Add aliyun repo to `android/app/AndroidManifest.xml`
```xml
<manifest 
    xmlns:android="http://schemas.android.com/apk/res/android" 
+++ xmlns:tools="http://schemas.android.com/tools"
>
  <application
        android:name=".MainApplication"
        android:allowBackup="false"
+++     tools:replace="android:allowBackup"
+++     tools:node="replace"
    ...>
    </application>
</manifest>
```

## Usage

```javascript
import { AliyunVodFileUpload, AliyunVodFileUploadEmitter } from 'react-native-aliyun-video-upload'

// Init
AliyunVodFileUpload.init(
  {
    videoId: '',
    uploadAuth: '',
    uploadAddress: ''
  },
  result => {
    console.log(result)
  }
)

AliyunVodFileUpload.addFile({
  path: '', // file path: /path/to/file/file.mp4
  type: 'mp4',
  title: '',
  desc: '',
  cateId: 1,
  tags: ''
})

AliyunVodFileUpload.start()
```

## API

```javascript
// Manage files
AliyunVodFileUpload.deleteFile(index: number)
AliyunVodFileUpload.clearFiles()
AliyunVodFileUpload.listFiles(callback: (files: File[]) => void)
AliyunVodFileUpload.cancelFile(index: number)

// Upload control
AliyunVodFileUpload.start()
AliyunVodFileUpload.stop()
AliyunVodFileUpload.pause()
AliyunVodFileUpload.resume()
```

## Event Listener

```javascript

  React.useEffect(() => {
    AliyunVodFileUploadEmitter.addListener('onUploadSucceed', params => {
      console.log('上传成功回调:', params);
    });
    AliyunVodFileUploadEmitter.addListener('onUploadFailed', params => {
      console.log('上传失败回调:', params);
    });
    AliyunVodFileUploadEmitter.addListener('onUploadProgress', params => {
      console.log('上载进度:', params);
    });
    AliyunVodFileUploadEmitter.addListener('onUploadTokenExpired', params => {
      console.log('上载时令牌已过期:', params);
    });
    AliyunVodFileUploadEmitter.addListener('onUploadRetry', params => {
      console.log('上载重试时:', params);
    });
    AliyunVodFileUploadEmitter.addListener('onUploadRetryResume', params => {
      console.log('上载时重试恢复:', params);
    });
    AliyunVodFileUploadEmitter.addListener('onUploadStarted', params => {
      console.log('上载开始时:', params);
    });

    return () => {
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadSucceed');
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadFailed');
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadProgress');
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadTokenExpired');
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadRetry');
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadRetryResume');
      AliyunVodFileUploadEmitter.removeAllListeners('onUploadStarted');
    };
  }, []);
```

### All Event

```
onUploadSucceed
OnUploadFailed
OnUploadProgress
OnUploadTokenExpired
OnUploadRerty
OnUploadRertyResume
OnUploadStarted
```
