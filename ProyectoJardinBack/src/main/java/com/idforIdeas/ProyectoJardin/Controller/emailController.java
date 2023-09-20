package com.idforIdeas.ProyectoJardin.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idforIdeas.ProyectoJardin.Model.Mail;
import com.idforIdeas.ProyectoJardin.Service.serviceEmail;

import jakarta.mail.MessagingException;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("email")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class emailController {
	
	
	private serviceEmail servEmail;
	
	@PostMapping("/send")
	public  ResponseEntity<Object> email(@RequestBody Mail mail) throws MessagingException {
		String names = mail.getNames();
		String email = mail.getEmail();
		String telephone = mail.getTelephone();
		String message = mail.getMessage();
		
		servEmail.sendEmail(names, email, telephone, message);
		return ResponseEntity.ok().body("emali eniviado correctamente");
	}

}
