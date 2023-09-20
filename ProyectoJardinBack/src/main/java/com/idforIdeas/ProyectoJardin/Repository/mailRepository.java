package com.idforIdeas.ProyectoJardin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idforIdeas.ProyectoJardin.Model.Mail;

@Repository
public interface mailRepository extends JpaRepository<Mail, Integer> {

}
