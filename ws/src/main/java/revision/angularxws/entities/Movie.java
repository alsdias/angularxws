package revision.angularxws.entities;

import javax.persistence.Entity;

@Entity
public class Movie {
    private String name;

    public Movie() {
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Car [name=" + name + "]";
	}
   
}