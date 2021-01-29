package com.nff.backend.s3;

import java.io.File;
import java.io.IOException;

import com.nff.backend.Constants;
import org.apache.commons.io.FileUtils;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.DeleteObjectsRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.services.s3.model.S3ObjectSummary;

/**
 * Class to initialize AWS S3 bucket. (Contains example codes for different operations)
 */
public class AWSS3Application {

    private static final AWSCredentials credentials;
    private static String bucketName;

    static {
        //put your accesskey and secretkey here
        credentials = new BasicAWSCredentials(
                Constants.ACCESS_KEY_ID,
                Constants.ACCESS_SEC_KEY
        );
    }

    public static void main(String[] args) throws IOException {
        //set-up the client
        AmazonS3 s3client = AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.US_WEST_1)
                .build();

        AWSS3Service awsService = new AWSS3Service(s3client);

        bucketName = Constants.BUCKET_NAME;

        //list all the buckets
        for(Bucket s : awsService.listBuckets() ) {
            System.out.println(s.getName());
        }

//        //uploading object
//        awsService.putObject(
//                bucketName,
//                "test-file",
//                new File("/Users/shujinglin/Desktop/baby.jpeg")
//        );
//
//        //listing objects
//        ObjectListing objectListing = awsService.listObjects(bucketName);
//        for(S3ObjectSummary os : objectListing.getObjectSummaries()) {
//            System.out.println(os.getKey());
//        }

//        //downloading an object
//        S3Object s3object = awsService.getObject(bucketName, "test-file");
//        S3ObjectInputStream inputStream = s3object.getObjectContent();
//        FileUtils.copyInputStreamToFile(inputStream, new File("/Users/shujinglin/Desktop/baby1.jpeg"));

//        //copying an object
//        awsService.copyObject(
//                "baeldung-bucket",
//                "picture/pic.png",
//                "baeldung-bucket2",
//                "Document/picture.png"
//        );
//
//        //deleting an object
//        awsService.deleteObject(bucketName, "Document/hello.txt");
//
//        //deleting multiple objects
//        String objkeyArr[] = {
//                "Document/hello2.txt",
//                "Document/picture.png"
//        };
//
//        DeleteObjectsRequest delObjReq = new DeleteObjectsRequest("baeldung-bucket")
//                .withKeys(objkeyArr);
//        awsService.deleteObjects(delObjReq);
    }
}