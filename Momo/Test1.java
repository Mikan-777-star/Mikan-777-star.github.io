import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class Test1 {

    public static void main(String[] args) {
        File f = null;
        int i = 1;
        while((f = new File("Momo"+i+".html")).exists())i++;
        String s = """
        <!DOCTYPE html>
        <html lang=\"en\">
        <head>
            <meta charset=\"UTF-8\">
            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
            <link rel=\"stylesheet\" href=\"Test1.css\">
            <title>桃さん生誕祭！！！</title>
        </head>
        <body>
            <main>

            </main>
        </body>
        </html>""";
        try(OutputStream os = new FileOutputStream(f)){
            os.write(s.getBytes());
            os.flush();
        }catch(IOException e){
            e.printStackTrace();
        }
    }
}