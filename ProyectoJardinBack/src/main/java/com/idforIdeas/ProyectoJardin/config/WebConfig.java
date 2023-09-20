/*package com.idforIdeas.ProyectoJardin.config;

import java.net.http.HttpHeaders;
import java.util.Arrays;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebMvc
public class WebConfig {
	@Bean
	SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http, AuthenticationManager authManager) {
	    http
	        .authorizeExchange(exchanges -> exchanges
	            .anyExchange().authenticated()
	        )
	        .httpBasic()
	        .formLogin(withDefaults())
	        .authorizeExchange((authorize) -> authorize                          
	    			.pathMatchers("/resources/**", "/signup", "/about").permitAll()  
	    			.pathMatchers("/admin/**").hasRole("ADMIN")                      
	    			.pathMatchers("/db/**").access((authentication, context) ->      
	    				hasRole("ADMIN").check(authentication, context)
	    					.filter(decision -> !decision.isGranted())
	    					.switchIfEmpty(hasRole("DBA").check(authentication, context))
	    			)
	    			.anyExchange().denyAll()                                         
	    		);
	    return http.build();
	}
	
	return http
	        .csrf().disable()
	        .authorizeRequests()
	        .anyRequest()
	        .authenticated()
	        .and()
	        .httpBasic()
	        .and()
	        .sessionManagement()
	        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	        .and()
	        .build();
	
	CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
	    configuration.setAllowedMethods(Arrays.asList("*"));
	    configuration.setAllowedHeaders(Arrays.asList("*"));
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return (CorsConfigurationSource) source;
	}
	
	
	//configuramos los permisos de las cors para petisiones desde el front
	@Bean
	public FilterRegistrationBean corsFilter () {
	UrlBasedCorsConfigurationSource source =  new UrlBasedCorsConfigurationSource();
	CorsConfiguration config = new CorsConfiguration();
	//se especifica todo lo que viene delf front
	config.setAllowCredentials(true);
	config.addAllowedOrigin("Http://localhost:3000");
	config.setAllowedHeaders(Arrays.asList("*"));
	config.setAllowedMethods(Arrays.asList(
			HttpMethod.GET.name(),
			HttpMethod.POST.name(),
			HttpMethod.PUT.name(),
			HttpMethod.DELETE.name()
			));
	//se acepta la solicitud de opciones en 30 minutos
	config.setMaxAge(3600L);
	//se aplica a todas la solicitudes
	source.registerCorsConfiguration("/**", config);
	FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
	bean.setOrder(-102);
	return bean;
	

	
}*/
	


