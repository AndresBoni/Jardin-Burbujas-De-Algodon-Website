package com.idforIdeas.ProyectoJardin.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "client")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "client_id")
	private Integer clientId;
	
	@Column(name="name")
	private String name;	

	
	@Column(name="last_name")
	private String lastName;
	
	private String telephone;
	
	private String email;
	
	private String password;
	
	private String rol;
	

}
