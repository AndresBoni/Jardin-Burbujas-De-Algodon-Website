package com.idforIdeas.ProyectoJardin.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "email")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Mail {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private int idemail;
	private String names;
	private String telephone;
	private String email;
	private String message;
	
	public Mail(String names, String telephone, String email, String message) {
		this.names = names;
		this.telephone = telephone;
		this.email = email;
		this.message = message;
		
	}

}