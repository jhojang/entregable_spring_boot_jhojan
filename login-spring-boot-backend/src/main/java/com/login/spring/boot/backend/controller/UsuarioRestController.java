package com.login.spring.boot.backend.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import com.login.spring.boot.backend.entity.Usuario;
import com.login.spring.boot.backend.include.EncryptPassword;
import com.login.spring.boot.backend.services.IUsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "" })
@RestController
@RequestMapping("/api")
public class UsuarioRestController {

    @Autowired
    IUsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<Usuario> listar() {
        return usuarioService.findAll();
    }

    @PostMapping("/usuarios/{id}")
    public Usuario ShowUser(@PathVariable Integer id) {
        return usuarioService.findById(id);
    }

    @PostMapping("/usuarios")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario create(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    @DeleteMapping("/usuarios/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        usuarioService.delete(id);
    }

    @PutMapping("/usuarios/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario update(@PathVariable Integer id, @RequestBody Usuario usuario) throws NoSuchAlgorithmException {
        Usuario usuarioDevuelto = usuarioService.findById(id);

        usuarioDevuelto.setUserName(usuario.getUserName());
        usuarioDevuelto.setName(usuario.getName());
        usuarioDevuelto.setLastName(usuario.getLastName());
        usuarioDevuelto.setEmail(usuario.getEmail());
        usuarioDevuelto.setPassword(EncryptPassword.getMD5(usuario.getPassword()));
        return usuarioService.save(usuarioDevuelto);
    }

}