package com.idforIdeas.ProyectoJardin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idforIdeas.ProyectoJardin.Model.Client;

@Repository
public interface clientRepository  extends JpaRepository<Client, Integer>{
	
	Optional<Client> getByEmail(String email);

}
