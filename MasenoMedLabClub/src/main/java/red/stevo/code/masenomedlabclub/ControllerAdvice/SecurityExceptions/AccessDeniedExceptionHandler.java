package red.stevo.code.masenomedlabclub.ControllerAdvice.SecurityExceptions;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@RequiredArgsConstructor
@Component("AccessDeniedExceptionHandler")
public class AccessDeniedExceptionHandler implements AccessDeniedHandler {

    private final HandlerExceptionResolver resolver;
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException, ServletException {
        resolver.resolveException(request, response, null, accessDeniedException);
    }
}
