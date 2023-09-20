package com.idforIdeas.ProyectoJardin.Service;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.idforIdeas.ProyectoJardin.Model.Client;
import com.idforIdeas.ProyectoJardin.Repository.clientRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class serviveClient {
	clientRepository clientrepository;
	
	public Client create(Client newClient) {
		return clientrepository.save(newClient);		
	}
	
	public List<Client> readAll() {
		return clientrepository.findAll();
	}
	
	public Client readOne (Integer id) {
		return clientrepository.findById(id).get();
	}
	
	public Client update (Client client) {
		Client updateClient = clientrepository.findById(client.getClientId()).get();
		
		updateClient.setName(client.getName());
		updateClient.setLastName(client.getLastName());
		updateClient.setEmail(client.getEmail());
		updateClient.setTelephone(client.getTelephone());
		updateClient.setPassword(client.getPassword());
		updateClient.setRol(client.getRol());
		
		return clientrepository.save(updateClient);
	}
	
	public Client ReadByEmail(String email, String password) {
		Client login = clientrepository.getByEmail(email).orElseThrow(null);
		
		if(login.getPassword() != password) {
			return null;
		}
		
		return login;
	}

}
