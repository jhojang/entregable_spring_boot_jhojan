package com.login.spring.boot.backend.models.dao;

import com.login.spring.boot.backend.entity.Usuario;

import org.springframework.data.repository.CrudRepository;

public interface IUsuarioDao extends CrudRepository<Usuario, Integer> {
    
}