package com.jlcv.pocketreader.pokemon;


import java.io.IOException;
import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import java.nio.ByteBuffer;




@SpringBootApplication
public class PokemonApplication {

	public static void main(String[] args) {
		SpringApplication.run(PokemonApplication.class, args);
		
		
	}


}



/**
// Post key to s3 bucket
public class PokemonApplication {
    public static void main(String[] args) throws IOException {
        
        Region region = Region.US_EAST_2;
        S3Client s3 = S3Client.builder().region(region).build();

        String bucket = "pocket-dex-bucket";
        String key = "key";

        // Put Object
        s3.putObject(PutObjectRequest.builder().bucket(bucket).key(key)
                .build(), RequestBody.fromByteBuffer(getRandomByteBuffer(10000)));
    }

    private static ByteBuffer getRandomByteBuffer(int size) throws IOException {
        byte[] b = new byte[size];
        new Random().nextBytes(b);
        return ByteBuffer.wrap(b);
    }
}
*/