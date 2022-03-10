import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author postgresqltutorial.com
 */
public class App{

	public static void main(String[] args) {
		String jdbcURL = "jdbc:postgresql://pocketdex-database-1.cqldiducsdjp.us-east-2.rds.amazonaws.com:5432/postgres";
		String username = "johndoe";
		String password = "password";
		
		try {
			Connection connection = DriverManager.getConnection(jdbcURL, username, password);
			System.out.println("Connected to PostgreSQL server");
			
			connection.close();
		} catch (SQLException e) {
			
			System.out.println("Error in connecting to PostgreSQL server");
			e.printStackTrace();

		}
	}

}