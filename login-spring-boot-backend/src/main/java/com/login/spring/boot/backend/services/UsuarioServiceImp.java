package com.login.spring.boot.backend.services;

import java.util.List;

import com.login.spring.boot.backend.entity.Usuario;
import com.login.spring.boot.backend.models.dao.IUsuarioDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuarioServiceImp implements IUsuarioService {

    @Autowired
    IUsuarioDao usuarioDao;

    @Override
    @Transactional(readOnly=true)
    public List<Usuario> findAll() {
        return (List<Usuario>) usuarioDao.findAll();
    }

    @Override
    @Transactional(readOnly=true)
    public Usuario findById(Integer id) {
        return usuarioDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Usuario save(Usuario usuario) {
        return usuarioDao.save(usuario);
    }

    @Override
    @Transactional
    public void delete(Integer id) {
        usuarioDao.deleteById(id);
    }
    
}